import '@/styles/global.pcss.css'

import type { AppProps } from 'next/app'
import { NextSeo, WebPageJsonLd } from 'next-seo'
import { jsonLd, project } from '@/data'
import { ThemeProvider } from 'theme-ui'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={{}}>
			<NextSeo {...project.seoDefaultConfig} />
			<WebPageJsonLd {...jsonLd.WebPage} />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
