import { FC } from 'react'
import AuthenticationLayout from '@/layout/AuthenticationLayout'
import style from '@/styles/Login.module.scss'
import useAuthenticationStore from '@/store/AuthenticationStore'
import { useRouter } from 'next/router'

const Login: FC = () => {
	const {
		email,
		password,
		changePassword,
		changeEmail,
		isLoading,
		error,
		singIn } = useAuthenticationStore()
	const router = useRouter()

	const handleLogIn = () => {
		singIn(email, password)
	}

	if(isLoading){
		return <AuthenticationLayout>
			<h1>Загрузка</h1>
		</AuthenticationLayout>
	}

	if(error){
		return <AuthenticationLayout>
			<h1>{error}</h1>
		</AuthenticationLayout>
	}

	return (
		<AuthenticationLayout>
			<div className={style.wrapper}>
				<h1>Login</h1>
				<form>
					<input
						onChange={changeEmail}
						value={email} type='email' placeholder='Enter email' />
					<input
						onChange={changePassword}
						value={password} type='password' placeholder='Enter password' />
				</form>
				<button onClick={handleLogIn}>Sing In</button>
			</div>
		</AuthenticationLayout>
	)
}

export default Login