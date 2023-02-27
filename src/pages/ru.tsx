import _common from '@/locales/ru/common.json'
import _content from '@/locales/ru/pageIndex.json'
import Homepage from '@/templates/Homepage'
export default function Ru() {
	return <Homepage _content={_content} _common={_common} />
}
