import '@/styles/global.pcss.css'

import type { AppProps } from 'next/app'
import { NextSeo, WebPageJsonLd } from 'next-seo'
import { jsonLd, project } from '@/data'

import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { globalStyles } from '@/theme/dummyStyles'

const cache = createCache({ key: 'next' })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextSeo {...project.seoDefaultConfig} />
			<WebPageJsonLd {...jsonLd.WebPage} />
			<CacheProvider value={cache}>
				{globalStyles}
				<Component {...pageProps} />
			</CacheProvider>
		</>
	)
}
