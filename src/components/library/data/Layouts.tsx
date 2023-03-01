import { Layouts } from '@/types'
import { BreadcrumbJsonLd } from 'next-seo'
import { jsonLd } from '@/data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import clsx from 'clsx'

const Layouts = (props: Layouts.LayoutProps) => {
	return (
		<>
			<Header />
			<BreadcrumbJsonLd itemListElements={jsonLd.BreadcrumbList} />
			<main className={clsx(props.className)} children={props.children} />
			<Footer />
		</>
	)
}

export default Layouts
