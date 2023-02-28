import { Layouts } from '@/types'
import { BreadcrumbJsonLd } from 'next-seo'
import { jsonLdBreadcrumbList } from '@/data/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const LayoutConstructor = ({ lang, children, ...props }: Layouts.LayoutProps) => {
	return (
		<>
			<Header />
			<BreadcrumbJsonLd itemListElements={jsonLdBreadcrumbList} />
			<main children={children} />
			<Footer />
		</>
	)
}

export { LayoutConstructor as Layout }
