import { Data } from '@/types'
import pageHomeContentEN from '@/locales/en/page/home.json'
import pageHomeContentRU from '@/locales/ru/page/home.json'
import pageHomeContentUk from '@/locales/uk/page/home.json'
import { ArticleJsonLdProps, WebPageJsonLdProps } from 'next-seo'
import { ItemListElements } from 'next-seo/lib/types'

export const project: Data.project = {
	url: process.env.NEXT_PUBLIC_URL || '',
	i18n: {
		locales: ['uk', 'ru', 'en'],
		defaultLocale: 'uk',
	},
	seoDefaultConfig: {
		additionalMetaTags: [
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				name: 'msapplication-TileColor',
				content: '#9eff00',
			},
		],
		additionalLinkTags: [
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
		],
		languageAlternates: [
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
		],
		themeColor: '#9eff00',
		openGraph: {
			type: 'website',
			images: [
				{
					url: '/og-image.jpg',
				},
			],
		},
	},
}

export namespace Page {
	export const Home = {
		content: {
			en: pageHomeContentEN,
			ru: pageHomeContentRU,
			uk: pageHomeContentUk,
		},
		articleJsonLd: {},
	}
}

export namespace jsonLd {
	export const WebPage: WebPageJsonLdProps = {
		id: 'project-id',
	}

	export const Article: ArticleJsonLdProps = {
		type: 'Article',
		url: '/',
		title: 'title',
		images: ['https://example.com/image.jpg'],
		datePublished: '2020-01-01',
		dateModified: '2020-01-01',
		authorName: 'Andrii Ivashchuk (@digitalandyeu)',
		description: 'description',
		isAccessibleForFree: true,
	}

	export const BreadcrumbList: ItemListElements[] = [
		{
			position: 1,
			name: 'Home',
			item: 'https://example.com/home',
		},
	]
}
