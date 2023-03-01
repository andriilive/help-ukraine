import '@/theme/tailwind.pcss.css'

import type { AppProps } from 'next/app'
import { NextSeo, WebPageJsonLd } from 'next-seo'
import { jsonLd, project } from '@/data'

import createCache from '@emotion/cache'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { makeTheme } from '@theme-ui/css/utils'
import { theme } from '@/theme'

const cache = createCache({ key: 'next' })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextSeo {...project.seoDefaultConfig} />
			<WebPageJsonLd {...jsonLd.WebPage} />
			<CacheProvider value={cache}>
				<ThemeProvider theme={makeTheme(theme)}>
					<Component {...pageProps} />
				</ThemeProvider>
			</CacheProvider>
		</>
	)
}
