import { ReactNode } from 'react'
import { StoreProps } from '@/model/StoreProps'

export interface LayoutProps extends StoreProps {
	children: ReactNode
}