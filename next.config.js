/** @type {import('next').NextConfig} */
const nextConfig = {
	images: { unoptimized: true }, // Disable for static export
	reactStrictMode: true,
	swcMinify: true,
}

module.exports = nextConfig
