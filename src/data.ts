import palette from 'tailwindcss/colors'

export const URL: string = process.env.NEXT_PUBLIC_URL || ''
export const Project = {
	URL,
}

export const Colors = {
	primary: palette.blue['500'],
}

export const Theme = {
	Colors,
}

const Data = {
	Theme,
	Project,
}

export default Data
