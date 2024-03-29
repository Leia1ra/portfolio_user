/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
        domains: ['raw.githubusercontent.com', 'github.com']
    },
    reactStrictMode: false,
    swcMinify: true,
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
}

module.exports = nextConfig
