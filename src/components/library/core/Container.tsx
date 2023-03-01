import clsx from 'clsx'
import { tv, VariantProps } from 'tailwind-variants'
import React, { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

const twContainer = tv({
	base: 'mx-auto',
	variants: {
		w: {
			prose: 'max-w-prose',
			default: 'max-w-7xl',
			none: ' w-none ',
			fullScreen: 'max-w-7xl lg:max-w-full',
		},
		px: {
			default: 'px-4 sm:px-6 lg:px-8',
			fullScreen: 'lg:px-24',
			none: ' px-none ',
		},
	},
	defaultVariants: {
		w: 'fullScreen',
		px: 'fullScreen',
	},
})

const Container: ElContainerFC = ({
	children,
	w = twContainer.defaultVariants.w,
	px = twContainer.defaultVariants.px,
	className,
	...props
}) => {
	return (
		<div className={clsx(twContainer({ w, px }), ...[className])} {...props}>
			{children}
		</div>
	)
}
export default Container

type ElVariants = VariantProps<typeof twContainer>
type ElProps = PropsWithChildren<ElVariants> & ComponentPropsWithoutRef<'div'>
type ElContainerFC = (props: ElProps) => JSX.Element | null
