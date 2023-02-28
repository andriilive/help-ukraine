import { tv, VariantProps } from 'tailwind-variants'
import styles from '@/ui/Container/styles.module.css'
import { Children } from '@/types'

export const elTailwind = tv({
	base: styles.container,
	variants: {
		w: {
			prose: 'max-w-prose',
			default: 'max-w-7xl',
			none: ' ',
		},
		px: {
			default: 'px-4 sm:px-6 lg:px-8',
			none: ' ',
		},
	},
	defaultVariants: {
		w: 'default',
		px: 'default',
	},
})

export type ElVariants = VariantProps<typeof elTailwind>
export interface ElProps extends ElVariants {
	children: Children
	className?: string
}
