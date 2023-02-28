import '@/styles/tailwind.pcss.css'
import '@/styles/global.pcss.css'
import type { AppProps } from 'next/app'
import { Colors } from '@/data'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextSeo
				additionalMetaTags={[
					{
						name: 'viewport',
						content: 'width=device-width, initial-scale=1',
					},
					{
						name: 'msapplication-TileColor',
						content: '#9eff00',
					},
				]}
				additionalLinkTags={[
					{
						rel: 'icon',
						type: 'favicon.ico',
						href: '/favicon.ico',
					},
					{
						rel: 'sitemap',
						type: 'application/xml',
						href: '/sitemap.xml',
					},
				]}
				languageAlternates={[
					{
						hrefLang: 'en',
						href: '/en',
					},
					{
						hrefLang: 'ru',
						href: '/ru',
					},
					{
						hrefLang: 'uk',
						href: '/',
					},
				]}
				themeColor={Colors.primary}
				openGraph={{
					type: 'website',
					images: [
						{
							url: '/og-image.jpg',
						},
					],
				}}
			/>
			<BreadcrumbJsonLd
				itemListElements={[
					{
						position: 1,
						item: '/uk',
					},
					{
						position: 1,
						name: '/ru',
					},
					{
						position: 1,
						name: '/en',
					},
				]}
			/>
			<Component {...pageProps} />
		</>
	)
}
