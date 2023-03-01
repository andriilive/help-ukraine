import type { Page } from '@/types'
import type { GetStaticProps, NextPage } from 'next'
import { ArticleJsonLd } from 'next-seo'
import Layouts from '@/components/library/data/Layouts'
import { project, jsonLd, Page as PageData } from '@/data'
import Container from '@/components/library/core/Container'
import Button from '@/components/library/core/Button'

export const PageHome: NextPage<Page.DefaultProps> = ({ lang, ...props }) => {
	console.log(PageData.Home)

	return (
		<Layouts lang={lang} {...props}>
			<ArticleJsonLd {...jsonLd.Article} />
			<Button></Button>
			<Container></Container>
		</Layouts>
	)
}

export const getStaticProps: GetStaticProps<Page.DefaultProps, Page.DefaultProps> = async (context) => ({
	props: {
		lang: context.params?.lang || project.i18n.defaultLocale || 'uk',
	},
})

export default PageHome
