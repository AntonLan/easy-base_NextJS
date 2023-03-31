import { FC, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import style from '@/styles/Login.module.scss'
import { useRouter } from 'next/router'
import LocalUtils from '@/utils/LocalUtils'
import Loader from '@/components/Loader'
import NotificationMessage from '@/components/NotificationMessage'
import { StoreProps } from '@/model/StoreProps'

const Authentication: FC<StoreProps> = ({ authenticationStore }) => {
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
			{authenticationStore?.error && <NotificationMessage message={authenticationStore?.error} />}
		</>
	)
}

export default inject(InjectNames.AuthenticationStore)(observer(Authentication))