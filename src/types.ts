import { pageHomeContentDefault } from '@/data'

export type LanguagesAllowed = 'en' | 'ru' | 'uk'

export type PageProps = {
	lang: 'en' | 'ru' | 'uk'
}

export type PagePropsWithProps = {
	props: PageProps
}

export type HomepageContent = typeof pageHomeContentDefault.content
export type HomepageContentItem = typeof pageHomeContentDefault.meta
