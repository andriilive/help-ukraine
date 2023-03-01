import '@/styles/global.pcss.css'

import type { AppProps } from 'next/app'
import { NextSeo, WebPageJsonLd } from 'next-seo'
import { jsonLdWebPage, seoDefaultConfig } from '@/data/seo'
import { ThemeProvider } from 'theme-ui'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={{}}>
			<NextSeo {...seoDefaultConfig} />
			<WebPageJsonLd {...jsonLdWebPage} />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
