import { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from 'react'
import { VariantProps } from 'tailwind-variants'
import { twContainer } from '@/ui/Container'

export type LanguagesAllowed = 'en' | 'ru' | 'uk'

export type Children = JSX.Element | ReactNode | ReactNode[]

export type PageProps = {
	lang: LanguagesAllowed
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

export namespace UIContainer {
	export type ElVariants = VariantProps<typeof twContainer>
	export type ElProps = PropsWithChildren<ElVariants> & ComponentPropsWithoutRef<'div'>
	export type ElContainerFC = (props: ElProps) => JSX.Element | null
}
