export type LanguagesAllowed = 'en' | 'ru' | 'uk'

export type PageProps = {
	lang: LanguagesAllowed
}

export type PagePropsWithProps = {
	props: PageProps
}
