import { tv } from 'tailwind-variants'
import styles from '@/ui/Container/styles.module.css'

const twContainer = tv({
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

export { twContainer }
