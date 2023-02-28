import { Layouts } from '@/types'
import { BreadcrumbJsonLd } from 'next-seo'
import { jsonLdBreadcrumbList } from '@/data/seo'
import Header from '@/templateParts/Header'
import Footer from '@/templateParts/Footer'
import clsx from 'clsx'

const Layout = (props: Layouts.LayoutProps) => {
	return (
		<>
			<Header />
			<BreadcrumbJsonLd itemListElements={jsonLdBreadcrumbList} />
			<main className={clsx(props.className)} children={props.children} />
			<Footer />
		</>
	)
}

export { Layout }
