import { FC } from 'react'
import MainLayout from '@/layout/MainLayout'
import Organizations from '@/components/sections/Organizations'

const OrganizationPage: FC = () => {
	return (
		<MainLayout>
			<Organizations />
		</MainLayout>
	)
}

export default OrganizationPage