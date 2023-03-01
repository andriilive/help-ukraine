import type { Page } from '@/types'
import type { GetStaticProps, NextPage } from 'next'
import { ArticleJsonLd } from 'next-seo'
import { Layout } from '@/layouts'
import { jsonLdArticle } from '@/data/seo'
import { Box, Button, Grid, Text } from '@theme-ui/components'
import { project } from '@/data'

export const PageHome: NextPage<Page.DefaultProps> = ({ lang, ...props }) => {
	return (
		<Layout lang={lang} {...props}>
			<ArticleJsonLd {...jsonLdArticle} />
			<Grid>
				<Box>
					<Text>Tests</Text>
					<Button>Button</Button>
				</Box>
			</Grid>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps<Page.DefaultProps, Page.DefaultProps> = async (context) => ({
	props: {
		lang: context.params?.lang || project.i18n.defaultLocale || 'uk',
	},
})

export default PageHome
