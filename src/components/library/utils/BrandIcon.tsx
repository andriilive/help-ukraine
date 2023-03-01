import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { IconLookup, IconDefinition, findIconDefinition, library, IconProp } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

interface CustomFontAwesomeIconProps extends FontAwesomeIconProps {
	icon: string | IconProp
}

const BrandIcon = (props: CustomFontAwesomeIconProps) => {
	const IconLookup: IconLookup & { iconName: string | IconProp } = { prefix: 'fab', iconName: props.icon }
	const IconDefinition: IconDefinition = findIconDefinition(IconLookup)

	return <FontAwesomeIcon {...props} icon={IconDefinition} />
}

export default BrandIcon
