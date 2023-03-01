import { Data } from '@/types'

export const project: Data.project = {
	url: process.env.NEXT_PUBLIC_URL || '',
	i18n: {
		locales: ['uk', 'ru', 'en'],
		defaultLocale: 'uk',
	},
}
