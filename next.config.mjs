/** @type {import('next').NextConfig} */
import path from "path";
import BuilderDevTools from "@builder.io/dev-tools/next";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const nextConfig = BuilderDevTools()({
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.module.rules.push({
      test: /\.ply$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/files",
            outputPath: "static/files",
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });
    config.resolve.alias["@src"] = __dirname + "/src";
    return config;
  },
  transpilePackages: ["three"],
});

export default nextConfig;
