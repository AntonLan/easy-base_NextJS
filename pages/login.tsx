import { FC, useEffect } from 'react'
import AuthenticationLayout from '@/layout/AuthenticationLayout'
import style from '@/styles/Login.module.scss'
import { useRouter } from 'next/router'
import AuthenticationStore from '@/store/AuthenticationStore'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'

interface LoginProps {
	authenticationStore?: AuthenticationStore
}


const Login: FC<LoginProps> = ({authenticationStore}) => {
	const router = useRouter()


	useEffect(() => {
		checkAuth()
	}, [authenticationStore?.isAuth])


	const handleLogIn = () => {
		authenticationStore?.singIn()
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

	if (authenticationStore?.isLoading) {
		return <AuthenticationLayout>
			<h1>Загрузка</h1>
		</AuthenticationLayout>
	}

	if (authenticationStore?.error) {
		return <AuthenticationLayout>
			<h1>{authenticationStore?.error}</h1>
		</AuthenticationLayout>
	}

	return (
		<AuthenticationLayout>
			<div className={style.wrapper}>
				<h1>Login</h1>
				<form>
					<input
						onChange={authenticationStore?.changeEmail}
						value={authenticationStore?.email} type='email' placeholder='Enter email' />
					<input
						onChange={authenticationStore?.changePassword}
						value={authenticationStore?.password} type='password' placeholder='Enter password' />
				</form>
				<div className='flex justify-between'>
					<button onClick={handleLogIn}>Sing In</button>
					<button onClick={handleSingUp}>Sing up</button>
				</div>
			</div>
		</AuthenticationLayout>
	)
}

export default inject(InjectNames.AuthenticationStore)(observer(Login))