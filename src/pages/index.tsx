import type { LanguagesAllowed, PageProps } from '@/types'
import type { GetStaticPropsResult, GetStaticProps } from 'next'
import { ArticleJsonLd } from 'next-seo'
import { Layout } from '@/layouts'
import { jsonLdArticle } from '@/data/seo'
import Container from '@/ui/Container'

export const Page = ({ lang, ...props }: PageProps) => {
	return (
		<Layout lang={lang} {...props}>
			<ArticleJsonLd {...jsonLdArticle} />
			<Container>
				<h1>Page</h1>
			</Container>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async (context): Promise<GetStaticPropsResult<PageProps>> => ({
	props: {
		lang: (context.params?.lang as LanguagesAllowed) || 'uk',
	},
})

export default Page
