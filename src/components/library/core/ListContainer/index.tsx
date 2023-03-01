import { tv, VariantProps } from 'tailwind-variants'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import styles from '@/components/library/core/ListContainer/styles.module.css'
import clsx from 'clsx'

const twListContainer = tv({
	base: styles.listContainer,
	variants: {
		w: {
			default: 'max-w-7xl',
		},
	},
	defaultVariants: {
		w: 'default',
	},
})

const ListContainer: ElListContainer = ({ w = twListContainer.defaultVariants.w, className, ..._props }) => {
	return (
		<ul className={clsx(twListContainer({ w }), ...[className])}>
			<li></li>
		</ul>
	)
}

export default ListContainer

type ElVariants = VariantProps<typeof twListContainer>
type ElProps = PropsWithChildren<ElVariants> & ComponentPropsWithoutRef<'ul'>
type ElListContainer = (props: ElProps) => JSX.Element | null
