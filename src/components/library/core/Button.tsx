import type { ButtonProps } from 'theme-ui'
import { Button as ButtonEl } from 'theme-ui'
import React from 'react'

const Button: React.FC<ButtonProps> = () => {
	return (
		<ButtonEl className={'1'} css={null} sx={{ bg: 'primary' }}>
			Button
		</ButtonEl>
	)
}

export default Button
