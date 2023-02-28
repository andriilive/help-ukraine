import { ArticleJsonLdProps, NextSeoProps, WebPageJsonLdProps } from 'next-seo'
import { colors } from '@/theme/colors'
import { ItemListElements } from 'next-seo/lib/types'

export const jsonLdWebPage: WebPageJsonLdProps = {
	id: 'project-id',
}

export const seoDefaultConfig: NextSeoProps = {
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
	themeColor: colors.primary,
	openGraph: {
		type: 'website',
		images: [
			{
				url: '/og-image.jpg',
			},
		],
	},
}

export const jsonLdArticle: ArticleJsonLdProps = {
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

export const jsonLdBreadcrumbList: ItemListElements[] = [
	{
		position: 1,
		name: 'Home',
		item: 'https://example.com/home',
	},
]
