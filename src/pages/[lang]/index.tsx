import { GetStaticPaths } from 'next'

export { Page as default } from '@/pages'
export { getStaticProps } from '@/pages'

export const getStaticPaths: GetStaticPaths = async (context) => ({
	paths: [{ params: { lang: 'en' } }, { params: { lang: 'ru' } }],
	fallback: false, // can also be true or 'blocking'
})
