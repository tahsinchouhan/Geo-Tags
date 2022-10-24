/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URI:
      "mongodb+srv://tahsinchouhan:Tahsin2000@cluster0.j09luk7.mongodb.net/test",
  },
};

module.exports = nextConfig;
