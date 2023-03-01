/** @typedef {import("tailwindcss/colors")} palette */
const palette = require('tailwindcss/colors')

/** @typedef {import("tailwindcss/defaultTheme")} defaultTheme */
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("tailwind-variants/transformer").withTV} withTV */
const { withTV } = require('tailwind-variants/transformer')

/** @type {import("tailwindcss").Config} */
module.exports = withTV({
	content: ['./src/**/*.{jsx,css,js,tsx,ts}', './public/**/*.svg'],
	theme: {
		fontFamily: {
			body: ['Inter', ...defaultTheme.fontFamily.sans],
			heading: ['Inter', ...defaultTheme.fontFamily.sans],
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
				'tablet-only': {
					raw: `(min-width: ${theme.breakpoints('sm')}) and (max-width: ${theme.breakpoints('md')})`,
				},
				'lg-only': { raw: `(min-width: ${theme.breakpoints('lg')})` },
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
})
