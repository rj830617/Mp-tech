import type { NextConfig } from "next";
import { legacyRedirects } from "./src/config/redirects";

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(legacyRedirects).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
