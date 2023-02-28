import { Layouts } from '@/types'
import { BreadcrumbJsonLd } from 'next-seo'
import { jsonLdBreadcrumbList } from '@/data/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import clsx from 'clsx'

const LayoutConstructor = ({ lang, children, className = ['layout-default'], ...props }: Layouts.LayoutProps) => {
	return (
		<>
			<Header />
			<BreadcrumbJsonLd itemListElements={jsonLdBreadcrumbList} />
			<main className={clsx(className)} children={children} />
			<Footer />
		</>
	)
}

export { LayoutConstructor as Layout }
