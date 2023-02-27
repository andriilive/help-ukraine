import Head from 'next/head'

const Homepage = ({ _content, _common }: { _content: any; _common: any }) => (
	<>
		<Head>
			<title>{_content.title}</title>
			<meta name="description" content={_content.description} />
		</Head>
		<main>
			<h1>
				{_common.language} : {_content.title}
			</h1>
			<section>
				<p>{_content.description}</p>
			</section>
		</main>
	</>
)

export default Homepage
