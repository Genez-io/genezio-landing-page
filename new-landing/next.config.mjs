/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  distDir: "build",
  output: "export",
  trailingSlash: true,
  redirects: async () => [
    {
      source: "/author/:path*",
      destination: "/deployment-platform/author/:path*",
      permanent: true
    },
    {
      source: "/blog/:path*",
      destination: "/deployment-platform/blog/:path*",
      permanent: true
    },
    {
      source: "/careers/:path*",
      destination: "/deployment-platform/careers/:path*",
      permanent: true
    },
    {
      source: "/deploy-django-on-genezio-serverless",
      destination: "/deployment-platform/deploy-django-on-genezio-serverless",
      permanent: true
    },
    {
      source: "/deploy-ember-apps",
      destination: "/deployment-platform/deploy-ember-apps",
      permanent: true
    },
    {
      source: "/deploy-fastapi-on-genezio-serverless",
      destination: "/deployment-platform/deploy-fastapi-on-genezio-serverless",
      permanent: true
    },
    {
      source: "/deploy-fastify-on-genezio-serverless",
      destination: "/deployment-platform/deploy-fastify-on-genezio-serverless",
      permanent: true
    },
    {
      source: "/deploy-flask-on-genezio-serverless",
      destination: "/deployment-platform/deploy-flask-on-genezio-serverless",
      permanent: true
    },
    {
      source: "/deploy-nest-apps",
      destination: "/deployment-platform/deploy-nest-apps",
      permanent: true
    },
    {
      source: "/deploy-nextjs-apps",
      destination: "/deployment-platform/deploy-nextjs-apps",
      permanent: true
    },
    {
      source: "/deploy-nodejs-express-on-genezio-serverless",
      destination:
        "/deployment-platform/deploy-nodejs-express-on-genezio-serverless",
      permanent: true
    },
    {
      source: "/deploy-python-apps",
      destination: "/deployment-platform/deploy-python-apps",
      permanent: true
    },
    {
      source: "/deploy-remix-apps",
      destination: "/deployment-platform/deploy-remix-apps",
      permanent: true
    },
    {
      source: "/deploy-streamlit-apps",
      destination: "/deployment-platform/deploy-streamlit-apps",
      permanent: true
    },
    {
      source: "/eula",
      destination: "/deployment-platform/eula",
      permanent: true
    },
    {
      source: "/exploring-the-differences-between-genezio-and-express-js",
      destination:
        "/deployment-platform/exploring-the-differences-between-genezio-and-express-js",
      permanent: true
    },
    {
      source: "/genezio-typesafe",
      destination: "/deployment-platform/genezio-typesafe",
      permanent: true
    },
    {
      source: "/how-to-schedule-tasks-with-genezio",
      destination: "/deployment-platform/how-to-schedule-tasks-with-genezio",
      permanent: true
    },
    {
      source: "/import-github-projects-genezio",
      destination: "/deployment-platform/import-github-projects-genezio",
      permanent: true
    },
    {
      source: "/pricing",
      destination: "/deployment-platform/pricing",
      permanent: true
    },
    {
      source: "/privacy-policy",
      destination: "/deployment-platform/privacy-policy",
      permanent: true
    },
    {
      source: "/serverless-scalability",
      destination: "/deployment-platform/serverless-scalability",
      permanent: true
    },
    {
      source: "/serverless-security",
      destination: "/deployment-platform/serverless-security",
      permanent: true
    },
    {
      source: "/tags/:path*",
      destination: "/deployment-platform/tags/:path*",
      permanent: true
    }
  ]
};

export default nextConfig;
