// The key-value store of the credentials of /certified-geo-expert: Upstash
// Redis, through its REST API, thus the functions need no package.
//
// The integration of Upstash on Vercel sets KV_REST_API_URL and
// KV_REST_API_TOKEN; a database made in the console of Upstash gives
// UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN. Either pair works.

function config() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url: url.replace(/\/+$/, ""), token } : null;
}

function isConfigured() {
  return config() !== null;
}

async function post(path, body) {
  const cfg = config();
  if (!cfg) throw new Error("KV_REST_API_URL and KV_REST_API_TOKEN are not set");
  const resp = await fetch(cfg.url + path, {
    method: "POST",
    headers: { Authorization: `Bearer ${cfg.token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await resp.json().catch(() => null);
  if (!resp.ok || data == null) {
    throw new Error(`Upstash ${resp.status}: ${data && data.error ? data.error : "no response"}`);
  }
  return data;
}

/** One command, such as kv("SET", key, value, "EX", 60). Gives its result. */
async function kv(...command) {
  const data = await post("", command.map(String));
  if (data.error) throw new Error(`Upstash: ${data.error}`);
  return data.result;
}

/**
 * Several commands in one round trip, as one transaction (MULTI/EXEC): all of
 * them run or none. Gives the list of their results.
 */
async function kvAtomic(commands) {
  const data = await post("/multi-exec", commands.map((c) => c.map(String)));
  if (!Array.isArray(data)) throw new Error(`Upstash: ${data.error || "bad transaction"}`);
  return data.map((r) => {
    if (r.error) throw new Error(`Upstash: ${r.error}`);
    return r.result;
  });
}

module.exports = { isConfigured, kv, kvAtomic };
