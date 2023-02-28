import type { LanguagesAllowed, PageProps } from '@/types'
import type { GetStaticPropsResult, GetStaticPaths, GetStaticProps } from 'next'
import { ArticleJsonLd } from 'next-seo'
import { Layout } from '@/layouts'
import { jsonLdArticle } from '@/data/seo'

export const Page = ({ lang, ...props }: PageProps) => {
	return (
		<Layout lang={lang} {...props}>
			<ArticleJsonLd {...jsonLdArticle} />
			<main></main>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async (context): Promise<GetStaticPropsResult<PageProps>> => ({
	props: {
		lang: (context.params?.lang as LanguagesAllowed) || 'uk',
	},
})

export const getStaticPaths: GetStaticPaths = async (_context) => ({
	paths: [{ params: { lang: 'en' } }, { params: { lang: 'ru' } }],
	fallback: false, // can also be true or 'blocking'
})
export default Page
