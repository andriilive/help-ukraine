import palette from 'tailwindcss/colors'
import pageHomeContentEN from '@/content/en/pages/pageHome.json'
import pageHomeContentRU from '@/content/ru/pages/pageHome.json'
import pageHomeContentUk from '@/content/uk/pages/pageHome.json'

export const Colors = {
	primary: palette.blue['500'],
}

export const ProjectUrl: string = process.env.NEXT_PUBLIC_URL || ''

export const HomepageContent = {
	en: pageHomeContentEN,
	ru: pageHomeContentRU,
	uk: pageHomeContentUk,
}

export const pageHomeContentDefault = HomepageContent.uk
