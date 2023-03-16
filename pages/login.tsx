import { FC } from 'react'
import AuthenticationLayout from '@/layout/AuthenticationLayout'
import SingIn from '@/components/sections/SingIn'



const Login: FC= () => {
	return (
		<AuthenticationLayout>
			<SingIn/>
		</AuthenticationLayout>
	)
}

export default Login