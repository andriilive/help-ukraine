/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
	},
	reactStrictMode: true,
	exportPathMap: async function () {
		return {
			'/': { page: '/' },
			'/en': { page: '/en' },
			'/ru': { page: '/ru' },
		}
	},
}

module.exports = nextConfig
