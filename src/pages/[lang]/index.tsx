import { GetStaticPaths } from 'next'
import PageHome from '@/pages'
import { Page } from '@/types'
export { getStaticProps } from '@/pages'

const PageHomeLocalisation = PageHome
export default PageHomeLocalisation

export const getStaticPaths: GetStaticPaths<Page.DefaultProps> = async (_context) => ({
	paths: [{ params: { lang: 'en' } }, { params: { lang: 'ru' } }],
	fallback: false, // can also be true or 'blocking'
})
