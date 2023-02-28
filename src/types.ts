import { ReactNode } from 'react'

export type LanguagesAllowed = 'en' | 'ru' | 'uk'

export type Children = JSX.Element | ReactNode | ReactNode[]

export type PageProps = {
	lang: LanguagesAllowed
}

export namespace data {
	export type Project = {
		url: string
	}
}

export namespace Data {
	export type Project = {
		url: string
	}
}

export namespace Layouts {
	export interface LayoutProps extends PageProps {
		className?: string | string[]
		children?: Children
	}
}
