import { FC } from 'react'
import style from '@/styles/Login.module.scss'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import Loader from '@/components/Loader'
import NotificationMessage from '@/components/NotificationMessage'
import { StoreProps } from '@/model/StoreProps'
import { useAuth } from '@/components/hooks/useAuth'

const SingIn: FC<StoreProps> = ({ authenticationStore }) => {
	const { handleSingUp } = useAuth('/')

	const handleLogIn = () => {
		authenticationStore?.singIn()
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