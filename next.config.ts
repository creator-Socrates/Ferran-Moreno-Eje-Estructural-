import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      {
        source: "/blog/del-alivio-a-la-expansion",
        destination: "/blog/el-alivio-no-es-expansion",
        permanent: true,
      },
      {
        source: "/en/blog/always-find-the-point-of-origin/always-find-the-point-of-origin",
        destination: "/en/blog/always-find-the-point-of-origin",
        permanent: true,
      },
      {
        source: "/en/blog/compensating-isnt-healing/compensating-isnt-healing",
        destination: "/en/blog/compensating-isnt-healing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
