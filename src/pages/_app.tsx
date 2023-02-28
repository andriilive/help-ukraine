import '@/theme/styles/global.pcss.css'

import type { AppProps } from 'next/app'
import { NextSeo, WebPageJsonLd } from 'next-seo'
import { jsonLdWebPage, seoDefaultConfig } from '@/data/seo'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextSeo {...seoDefaultConfig} />
			<WebPageJsonLd {...jsonLdWebPage} />
			<Component {...pageProps} />
		</>
	)
}
