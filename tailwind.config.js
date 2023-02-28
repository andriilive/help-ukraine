/** @typedef {import('tailwindcss/colors')} palette */
const palette = require('tailwindcss/colors')

/** @typedef {import('tailwindcss/defaultTheme')} defaultTheme */
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{jsx,css}', './public/**/*.svg'],
	theme: {
		fontFamily: {
			body: ['Inter', ...defaultTheme.fontFamily.sans],
			DEFAULT: this.body,
		},
		extend: {
			transitionProperty: {
				inherit: 'inherit',
			},
			colors: {
				inherit: 'inherit',
				transparent: 'transparent',
				primary: palette.blue['500'],
			},
			screens: (theme) => ({
				'sm-only': { raw: `(max-width: ${theme.breakpoints('sm')})` },
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
