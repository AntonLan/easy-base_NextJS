import React, { FC, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import style from '@/styles/Login.module.scss'
import AuthenticationLayout from '@/layout/AuthenticationLayout'
import { useRouter } from 'next/router'
import AuthenticationStore from '@/store/AuthenticationStore'
import LocalUtils from '@/utils/LocalUtils'
import Loader from '@/components/Loader'

interface RegistrationProps {
	authenticationStore?: AuthenticationStore
}

const Authentication: FC<RegistrationProps> = ({authenticationStore}) => {
	const router = useRouter()

	useEffect(() => {
		checkAuth()
	}, [authenticationStore?.isAuth])

	const handleSingUp = () => {
		authenticationStore?.singUp()
	}

	const handleLogIn = () => {
		router.push('/login')
	}

	const checkAuth = () => {
		LocalUtils.getToken()
		if (LocalUtils.getToken()) {
			router.replace('/')
		}
	}


	if (authenticationStore?.isLoading) {
		return <AuthenticationLayout>
			<Loader />
		</AuthenticationLayout>
	}

	if (authenticationStore?.error) {
		return <AuthenticationLayout>
			<h1>{authenticationStore?.error}</h1>
		</AuthenticationLayout>
	}


	return (
		<div className={style.wrapper}>
			<h1>Registration</h1>
			<form>
				<input
					onChange={authenticationStore?.changeUserName}
					value={authenticationStore?.userName} type='text' placeholder='Enter user name' />
				<input
					onChange={authenticationStore?.changeEmail}
					value={authenticationStore?.email} type='email' placeholder='Enter email' />
				<input
					onChange={authenticationStore?.changePassword}
					value={authenticationStore?.password} type='password' placeholder='Enter password' />
			</form>
			<div className={style.btnWrapper}>
				<button onClick={handleSingUp}>Sing Up</button>
				<div className={style.divider}>------------OR------------</div>
				<button onClick={handleLogIn}>Sing In</button>
			</div>
		</div>
	)
}

export default inject(InjectNames.AuthenticationStore)(observer(Authentication))