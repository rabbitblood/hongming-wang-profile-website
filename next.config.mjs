/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: {
    rules: [
      {
        test: /\.ply$/,
        use: [{ loader: "ref-loader" }],
      },
    ],
  },
};

export default nextConfig;
