import _common from '@/locales/en/common.json'
import _content from '@/locales/en/pageIndex.json'
import Homepage from '@/templates/Homepage'

export default function En() {
	return <Homepage _content={_content} _common={_common} />
}
