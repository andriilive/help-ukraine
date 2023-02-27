const colors = require('tailwindcss/colors')

/** @typedef {import('tailwindcss/defaultTheme')} defaultTheme */
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/styles/**/*.{css,scss,sass}', './public/**/*.{svg}'],
	theme: {
		fontFamily: {
			body: ['Cabin', ...defaultTheme.fontFamily.sans],
			display: ['Raleway', ...defaultTheme.fontFamily.sans],
			DEFAULT: this.body,
		},
		extend: {
			transitionProperty: {
				inherit: 'inherit',
			},
			colors: {
				inherit: 'inherit',
				primary: colors.blue['500'],
			},
			screens: (theme) => ({
				'sm-only': { raw: `(max-width: ${theme.breakpoints('sm')})` },
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
