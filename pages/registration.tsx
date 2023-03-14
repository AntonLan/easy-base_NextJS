import { FC } from 'react'
import AuthenticationLayout from '@/layout/AuthenticationLayout'
import Authentication from '@/components/sections/Authentication'

const Registration: FC = () => {

	return (
		<AuthenticationLayout>
			<Authentication/>
		</AuthenticationLayout>
	)
}

export default Registration