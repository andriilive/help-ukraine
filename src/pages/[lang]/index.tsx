import type { LanguagesAllowed, PageProps, PagePropsWithProps } from '@/types'
import type { GetStaticPathsResult, GetStaticPropsContext } from 'next'
import TemplateHome from '@/components/TemplateHome'

export const Page = (props: PageProps) => {
	return <TemplateHome {...props} />
}

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps = async (context: GetStaticPropsContext): Promise<PagePropsWithProps> => ({
	props: {
		lang: (context.params?.lang as LanguagesAllowed) || 'uk',
	},
})
export const getStaticPaths = async (): Promise<GetStaticPathsResult> => ({
	paths: [{ params: { lang: 'en' } }, { params: { lang: 'ru' } }],
	fallback: false, // can also be true or 'blocking'
})
export default Page
