import clsx from 'clsx'
import { elTailwind, ElProps, ElVariants } from '@/ui/Container/types'

const DefaultConstructor = ({ children, w = 'default', px = 'default', className, ...props }: ElProps) => {
	return (
		<div className={clsx(elTailwind({ w, px } as ElVariants), ...[className])} {...props}>
			{children}
		</div>
	)
}

export default DefaultConstructor
