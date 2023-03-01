import { ReactNode } from 'react'
import { I18NConfig } from 'next/dist/server/config-shared'
import { NextSeoProps } from 'next-seo'

export type Children = JSX.Element | ReactNode | ReactNode[]

export namespace I18n {
	export const languages = ['en', 'ru', 'uk'] as const
	export type Language = (typeof languages)[number]
}

export namespace Page {
	export type DefaultProps = {
		lang: I18n.Language
	}
}

export namespace Data {
	export type project = {
		url: string
		seoDefaultConfig: NextSeoProps
		i18n: Omit<I18NConfig, 'locales' | 'defaultLocale'> & {
			locales: I18n.Language[]
			defaultLocale: I18n.Language
		}
	}
}

export namespace Layouts {
	export interface LayoutProps extends Page.DefaultProps {
		className?: string | string[]
		children?: Children
	}
}
