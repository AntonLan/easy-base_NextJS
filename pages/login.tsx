import { FC, useEffect } from 'react'
import AuthenticationLayout from '@/layout/AuthenticationLayout'
import style from '@/styles/Login.module.scss'
import useAuthenticationStore from '@/store/AuthenticationStore'
import { useRouter } from 'next/router'

const Login: FC = () => {
	const singIn = useAuthenticationStore(s => s.singIn)
	const email = useAuthenticationStore(s => s.email)
	const password = useAuthenticationStore(s => s.password)
	const changePassword = useAuthenticationStore(s => s.changePassword)
	const changeEmail = useAuthenticationStore(s => s.changeEmail)
	const isLoading = useAuthenticationStore(s => s.isLoading)
	const error = useAuthenticationStore(s => s.error)
	const isAuth = useAuthenticationStore(s => s.isAuth)
	const router = useRouter()


	useEffect(() => {
		checkAuth()
	}, [isAuth])


	const handleLogIn = () => {
		singIn(email, password)
	}

	const handleSingUp = () => {
		router.push('/registration')
	}

	const checkAuth = () => {
		let token = localStorage.getItem('token')
		if (token) {
			router.push('/')
		}
	}

	if (isLoading) {
		return <AuthenticationLayout>
			<h1>Загрузка</h1>
		</AuthenticationLayout>
	}

	if (error) {
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
				<div className='flex justify-between'>
					<button onClick={handleLogIn}>Sing In</button>
					<button onClick={handleSingUp}>Sing up</button>
				</div>
			</div>
		</AuthenticationLayout>
	)
}

export default Login