import { makeTheme } from '@theme-ui/css/utils'

export const theme = makeTheme({
	config: {
		initialColorModeName: 'light',
		useColorSchemeMediaQuery: true,
	},

	colors: {
		text: '#000',
		background: '#fff',
		primary: '#07c',
		secondary: '#b0b',
		modes: {
			dark: {
				text: '#fff',
				background: '#222',
				primary: '#0cf',
				secondary: '#faf',
			},
		},
	},
	fonts: {
		body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
		heading: 'sans-serif',
	},
	radii: [0, 4],

	styles: {
		root: {
			fontFamily: 'body',
			color: 'text',
			bg: 'background',
			p: 4,
		},
		a: {
			color: 'primary',
			fontWeight: 'bold',
			textDecoration: 'none',
			':hover': {
				color: 'secondary',
				textDecoration: 'underline',
			},
		},
	},

	buttons: {
		primary: {
			cursor: 'pointer',
		},
	},
})

import palette from 'tailwindcss/colors'
import { tv } from 'tailwind-variants'

const colors = {
	primary: palette.blue['500'],
}

export { colors, palette as defaultPalette }

export namespace twComponents {
	export const Container = tv({
		base: 'mx-auto',
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
}
