import { GetStaticPaths } from 'next'

import PageHome from '@/pages'
export { getStaticProps } from '@/pages'

const PageHomeLocales = PageHome
export default PageHomeLocales

export const getStaticPaths: GetStaticPaths = async (_context) => ({
	paths: [{ params: { lang: 'en' } }, { params: { lang: 'ru' } }],
	fallback: false, // can also be true or 'blocking'
})
