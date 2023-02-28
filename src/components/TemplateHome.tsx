import Head from 'next/head'
import { LanguagesAllowed } from '@/types'
import { HomepageContent, ProjectUrl } from '@/data'
import { ArticleJsonLd, ArticleJsonLdProps, WebPageJsonLd, WebPageJsonLdProps } from 'next-seo'

const TemplateHome = ({ lang, ...props }: { lang: LanguagesAllowed }) => {
	const { content, meta } = HomepageContent[lang]

	const importantMeta: any = {
		title: meta?.title || content.title || 'title',
		description: meta?.description || content.description || 'description',
	}

	const webPageJsonLd: WebPageJsonLdProps = {
		id: 'project-id',
		description: importantMeta.description,
	}

	const articleJsonLd: ArticleJsonLdProps = {
		url: ProjectUrl,
		title: importantMeta.title,
		description: importantMeta.description,
		images: [],
		datePublished: new Date().toLocaleDateString(),
		authorName: 'Andrii Ivashchuk (@digitalandyeu)',
	}

	return (
		<main {...props}>
			<Head>
				<title>{importantMeta.title}</title>
				<meta name={'description'} content={importantMeta.description} />
			</Head>
			<WebPageJsonLd {...webPageJsonLd} />
			<ArticleJsonLd {...articleJsonLd} />
			<article>
				<header>
					<h1>{content.title}</h1>
				</header>
				<section>
					<p>{content.description}</p>
				</section>
			</article>
		</main>
	)
}

export default TemplateHome
