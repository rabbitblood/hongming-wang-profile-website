/** @type {import('next').NextConfig} */

const nextConfig = {
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
    return config;
  },
  transpilePackages: ["three"],
};

export default nextConfig;
