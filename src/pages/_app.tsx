import '@/styles/tailwind.pcss.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { URL, Colors } from '@/data'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="robots" content="index,follow" />
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link type="text/plain" rel="author" href={'/humans.txt'} />

				<meta name="theme-color" content={Colors.primary} />
				<meta name="msapplication-TileColor" content={Colors.primary} />

				<link rel="alternate" hrefLang="en" href={URL + '/en'} />
				<link rel="alternate" hrefLang="ru" href={URL + '/ru'} />
				<link rel="alternate" hrefLang="uk" href={URL + '/'} />

				<meta property="og:image" content={URL + '/og-image.jpg'} />

				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}
