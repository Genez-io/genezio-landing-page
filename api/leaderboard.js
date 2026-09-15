// Vercel serverless function: /api/leaderboard?industry=banking
//
// The Industry Leaderboards page used to call the Genezio API straight from
// the browser, with a JWT compiled into the bundle. Two things were wrong with
// that: the token was public — anyone could read it out of the JS and call the
// API as that user — and it stopped working the day the API began to check
// that a token still names a live session. The charts went blank.
//
// This function takes that call over. It holds the credentials of a *service
// client*: an identity with no person behind it. It trades them for a token at
// `POST /oauth/token` (RFC 6749 client_credentials) and keeps that token
// between invocations until it is close to its end. No logout can revoke it —
// the session row of such a token names the service client and not a person,
// so it ends only when someone revokes the client on purpose. The token never
// reaches the browser, and the page calls this same-origin route instead.
//
// Configure via env vars in Vercel:
//   GENEZIO_SERVICE_CLIENT_ID     - client_id of the service client
//   GENEZIO_SERVICE_CLIENT_SECRET - its secret (shown once, at creation)
//   GENEZIO_API_URL               - optional, defaults to the production API
//   GENEZIO_LEADERBOARD_TOKEN     - optional escape hatch: a ready-made bearer
//                                   token, used as is when no client
//                                   credentials are set
//
// The service client comes from the backend repo:
//   python scripts/service_client.py create \
//     --account <id of the account that owns the leaderboard brands> \
//     --name landing-leaderboards --scopes "mcp:read"

const API_URL = (process.env.GENEZIO_API_URL || "https://app.backend.genezio.ai")
  .replace(/\/+$/, "");

const DEFAULT_MODELS = ["chatgpt.com", "google-ai-overview"];

// The brand and the topics of each industry live here and not in the query, so
// this route is a window onto four known leaderboards and not a general-purpose
// authenticated proxy into the API.
const INDUSTRIES = {
  banking: {
    brandId: -49,
    topicIds: [269, 265, 264, 263, 262, 261, 260, 259, 520, 272],
    models: [
      "chatgpt.com",
      "google-ai-overview",
      "perplexity",
      "google-ai-mode",
      "gpt-5.2",
    ],
  },
  fashion: { brandId: -64, topicIds: [397, 396, 398, 572, 483] },
  healthcare: { brandId: -31, topicIds: [96, 95, 94, 511] },
  retail: { brandId: -29, topicIds: [90, 89, 88, 518] },
};

// The window that the page charts: the last 30 days, whole days at both ends.
const WINDOW_DAYS = 30;

// A token of a service client lives 30 minutes. This drops it a minute early,
// so a request that starts just before the end does not finish after it.
const EXPIRY_MARGIN_SECONDS = 60;

// The leaderboard moves once a day. The CDN answers from its copy for half an
// hour, and serves a stale copy for a day while it fetches a new one, so a cold
// API or a failed token refresh is invisible to a visitor.
const CDN_CACHE_CONTROL = "public, s-maxage=1800, stale-while-revalidate=86400";

// Cached across invocations of a warm instance: a cold start pays for one
// token, the requests after it pay for none.
let cachedToken = null; // { value, expiresAt }
let pendingToken = null; // the in-flight request, shared by concurrent callers

function isFresh(token) {
  return Boolean(token) && token.expiresAt > Date.now();
}

async function requestServiceToken() {
  const clientId = process.env.GENEZIO_SERVICE_CLIENT_ID;
  const clientSecret = process.env.GENEZIO_SERVICE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    const fallback = process.env.GENEZIO_LEADERBOARD_TOKEN;
    if (!fallback) {
      throw new Error(
        "Set GENEZIO_SERVICE_CLIENT_ID and GENEZIO_SERVICE_CLIENT_SECRET " +
          "(or GENEZIO_LEADERBOARD_TOKEN) in the Vercel project.",
      );
    }
    // A token given by hand carries no expiry that this function can read, so
    // it is kept for an hour and re-read from the environment after that.
    return { value: fallback, expiresAt: Date.now() + 3600 * 1000 };
  }

  const resp = await fetch(`${API_URL}/oauth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
      scope: "mcp:read",
    }),
  });

  if (!resp.ok) {
    const detail = await resp.text().catch(() => "");
    throw new Error(`Token request failed with status ${resp.status} ${detail}`);
  }

  const payload = await resp.json();
  if (!payload || !payload.access_token) {
    throw new Error("Token response carried no access_token");
  }

  const lifetime = Number(payload.expires_in) || 1800;
  return {
    value: payload.access_token,
    expiresAt:
      Date.now() + Math.max(lifetime - EXPIRY_MARGIN_SECONDS, 30) * 1000,
  };
}

async function getToken({ force = false } = {}) {
  if (force) cachedToken = null;
  if (isFresh(cachedToken)) return cachedToken.value;

  // Several requests can land on one cold instance at the same time. They share
  // one token request instead of each asking for a token of its own.
  if (!pendingToken) {
    pendingToken = requestServiceToken()
      .then((token) => {
        cachedToken = token;
        return token;
      })
      .finally(() => {
        pendingToken = null;
      });
  }

  const token = await pendingToken;
  return token.value;
}

function buildMetricsUrl(industry) {
  const endDate = new Date();
  endDate.setUTCHours(23, 59, 59, 999);
  const startDate = new Date(endDate);
  startDate.setUTCDate(startDate.getUTCDate() - WINDOW_DAYS);
  startDate.setUTCHours(0, 0, 0, 0);

  const params = new URLSearchParams({
    metric_type: "mentioned",
    aggregation_type: "daily",
    start_date: startDate.toISOString(),
    end_date: endDate.toISOString(),
  });
  for (const topicId of industry.topicIds) {
    params.append("topic_ids", String(topicId));
  }
  for (const model of industry.models || DEFAULT_MODELS) {
    params.append("models_name", model);
  }

  return (
    `${API_URL}/api/v1/sql/brand/overview/${industry.brandId}/brand-metrics` +
    `?${params.toString()}`
  );
}

async function fetchMetrics(url, token) {
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const requested = String(
    (req.query && req.query.industry) || "",
  ).toLowerCase();
  const industry = INDUSTRIES[requested];
  if (!industry) {
    return res.status(400).json({
      error: `Unknown industry. Expected one of: ${Object.keys(INDUSTRIES).join(", ")}.`,
    });
  }

  const url = buildMetricsUrl(industry);

  try {
    let token = await getToken();
    let resp = await fetchMetrics(url, token);

    // A token that the API refuses is a token that ended between the cache and
    // this request — a restart of the API, or a revoked and re-made client.
    // One fresh token answers all three, so the visitor sees no error.
    if (resp.status === 401 || resp.status === 403) {
      console.warn(
        `[leaderboard] ${requested}: token refused with ${resp.status}, retrying with a fresh one`,
      );
      token = await getToken({ force: true });
      resp = await fetchMetrics(url, token);
    }

    if (!resp.ok) {
      const detail = await resp.text().catch(() => "");
      console.error(
        `[leaderboard] ${requested}: request failed with ${resp.status}`,
        detail.slice(0, 500),
      );
      return res
        .status(502)
        .json({ error: `Upstream request failed with status ${resp.status}` });
    }

    const payload = await resp.json();
    res.setHeader("Cache-Control", CDN_CACHE_CONTROL);
    return res.status(200).json(payload);
  } catch (error) {
    console.error(`[leaderboard] ${requested}: ${error && error.message}`);
    return res.status(502).json({ error: "Failed to load leaderboard data." });
  }
};
