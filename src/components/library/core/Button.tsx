import type { ButtonProps } from 'theme-ui'
import { Button as ButtonEl } from 'theme-ui'
import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { tv, VariantProps } from 'tailwind-variants'

const twButton = tv({
	base: 'inline-flex items-center border font-medium focus:ring-2 focus:outline-none focus:ring-offset-2',
	variants: {
		color: {
			primary: 'bg-indigo-600 border-transparent text-white shadow-sm hover:bg-indigo-700 focus:ring-indigo-500',
			secondary: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200  focus:ring-indigo-500',
			white: 'border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-indigo-500',
		},
		size: {
			xxs: 'px-2.5 py-1.5 text-xs ',
			sm: 'px-3 py-2 text-sm',
			md: 'px-4 py-2 text-sm',
			default: 'px-4 py-2 text-base',
			lg: 'px-6 py-3 text-base',
			none: '',
		},
		square: {
			true: 'inline-flex items-center',
		},
		innerSpacing: {
			default: 'space-x-2',
			none: '',
		},
	},
	defaultVariants: {
		color: 'primary',
		size: 'default',
		square: false,
		innerSpacing: 'default',
	},
})

type ElVariants = VariantProps<typeof twButton>
type ElProps = PropsWithChildren<ElVariants> & ButtonProps

const Button: React.FC<ElProps> = ({
	className,
	color = twButton.defaultVariants.color,
	size = twButton.defaultVariants.size,
	square = twButton.defaultVariants.square,
	innerSpacing = twButton.defaultVariants.innerSpacing,
	children,
	...props
}) => {
	return (
		<ButtonEl
			style={{}}
			css={null}
			{...props}
			className={clsx(twButton({ color, size, square, innerSpacing }), ...[className])}
		>
			{children}
		</ButtonEl>
	)
}

export default Button
