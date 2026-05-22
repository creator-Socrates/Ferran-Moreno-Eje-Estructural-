import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/del-alivio-a-la-expansion",
        destination: "/blog/el-alivio-no-es-expansion",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
