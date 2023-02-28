import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

interface ContainerProps extends PropsWithChildren<ComponentPropsWithoutRef<'section'>> {
	w: 'prose' | 'default' | 'none' | 'fullScreen'
}

type Container = (props: ContainerProps) => JSX.Element | null

const Container: Container = ({ w, ...props }) => <></>
export default Container
