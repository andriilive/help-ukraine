import type { Page } from '@/types'
import type { GetStaticProps, NextPage } from 'next'
import { ArticleJsonLd } from 'next-seo'
import Layouts from '@/components/library/data/Layouts'
import { Box, Button, Grid, Text } from '@theme-ui/components'
import { project, jsonLd, Page as PageData } from '@/data'

export const PageHome: NextPage<Page.DefaultProps> = ({ lang, ...props }) => {
	console.log(PageData.Home)

	return (
		<Layouts lang={lang} {...props}>
			<ArticleJsonLd {...jsonLd.Article} />
			<Grid>
				<Box>
					<Text>Tests</Text>
					<Button>Button</Button>
				</Box>
			</Grid>
		</Layouts>
	)
}

export const getStaticProps: GetStaticProps<Page.DefaultProps, Page.DefaultProps> = async (context) => ({
	props: {
		lang: context.params?.lang || project.i18n.defaultLocale || 'uk',
	},
})

export default PageHome
