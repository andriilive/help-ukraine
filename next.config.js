/** @type {import('next').NextConfig} */
const nextConfig = {
	images: { unoptimized: true }, // Disable for static export
	reactStrictMode: true,
	swcMinify: true,
	exportPathMap: async function (defaultPathMap, ctx) {
		const debug = {
			defaultPathMap,
			ctx,
		}

		process.env.NODE_ENV === 'export' && console.log(debug)

		/** @type {import('next/dist/server/config-shared').ExportPathMap } webConfig */
		return defaultPathMap
	},

	// i18n: {
	// 	locales: ['en', 'ru', 'uk'],
	// 	defaultLocale: 'uk',
	// },
	// exportPathMap: async function (defaultPathMap, ctx) {
	// 	const debug = {
	// 		defaultPathMap,
	// 		ctx,
	// 	}
	// 	/** @type {import('next/dist/server/config-shared').ExportPathMap } webConfig */
	// 	const webConfig = {
	// 		'/': { page: '/' },
	// 		'/en': { page: '/en' },
	// 		'/ru': { page: '/ru' },
	// 	}
	// 	return webConfig
	// },
}

module.exports = nextConfig
