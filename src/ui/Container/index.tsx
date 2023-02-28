import clsx from 'clsx'
import { tv } from 'tailwind-variants'
import styles from '@/ui/Container/styles.module.css'
import React from 'react'
import { UIContainer } from '@/types'

export const twContainer = tv({
	base: styles.container,
	variants: {
		w: {
			prose: 'max-w-prose',
			default: 'max-w-7xl',
			none: ' ',
			fullScreen: 'max-w-7xl lg:max-w-full',
		},
		px: {
			default: 'px-4 sm:px-6 lg:px-8',
			fullScreen: 'lg:px-24',
			none: ' ',
		},
	},
	defaultVariants: {
		w: 'fullScreen',
		px: 'fullScreen',
	},
})

const Container: UIContainer.ElContainerFC = ({
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
