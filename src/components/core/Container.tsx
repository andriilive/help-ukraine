import { tv, VariantProps } from 'tailwind-variants'
import { ReactNode } from 'react'
import clsx from 'clsx'

const container = tv({
	base: 'cn',
	variants: {
		w: {
			fluid: 'max-w-full',
			tight: 'max-w-6xl',
			default: 'max-w-7xl',
		},
		px: {
			default: 'px-default',
		},
	},
	defaultVariants: {
		w: 'default',
		px: 'default',
	},
})

type ContainerV = VariantProps<typeof container>

interface ContainerProps extends ContainerV {
	children?: ReactNode
	className?: string
}

const Container = ({ children, className, px = 'default', w = 'default', ...props }: ContainerProps) => {
	const vProps: ContainerV = { w, px }

	const vPropClasses: any[] = Object.entries(vProps).map(([k, val]) => {
		// return val !== 'default' ? 'container/' + k + '-' + val : null
		return 'cn-' + k + '-' + val
	})

	return (
		<>
			<div
				aria-label={'container'}
				{...props}
				className={clsx(container(vProps), ...[...vPropClasses, className])}
			>
				<span>{children}</span>
			</div>
		</>
	)
}

export default Container
