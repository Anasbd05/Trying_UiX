import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "blob.haxed.net"
      }
    ]
  }
};

export default nextConfig;
