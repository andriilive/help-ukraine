import _common from '@/locales/uk/common.json'
import _content from '@/locales/uk/pageIndex.json'
import Homepage from '@/templates/Homepage'

export default function Home() {
	return <Homepage _content={_content} _common={_common} />
}
