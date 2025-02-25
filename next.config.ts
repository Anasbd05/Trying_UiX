import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "jhsrufbgcwyvmcshfcoe.supabase.co"
      }
    ]
  }
};

export default nextConfig;
