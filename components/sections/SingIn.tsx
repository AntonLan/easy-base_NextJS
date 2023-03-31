import { FC, useEffect } from 'react'
import style from '@/styles/Login.module.scss'
import { useRouter } from 'next/router'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import Loader from '@/components/Loader'
import NotificationMessage from '@/components/NotificationMessage'
import LocalUtils from '@/utils/LocalUtils'
import { StoreProps } from '@/model/StoreProps'

const SingIn: FC<StoreProps> = ({ authenticationStore }) => {
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
		if (LocalUtils.getToken()) {
			router.replace('/')
		}
	}

	if (authenticationStore?.isLoading) {
		return <Loader />
	}


	return (
		<>
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
				<div className={style.btnWrapper}>
					<button onClick={handleLogIn}>Sing In</button>
					<div className={style.divider}>------------OR------------</div>
					<button onClick={handleSingUp}>Sing up</button>
				</div>
			</div>
			{authenticationStore?.error && <NotificationMessage message={authenticationStore?.error} />}
		</>

	)
}

export default inject(InjectNames.AuthenticationStore)(observer(SingIn))