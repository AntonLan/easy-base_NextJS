import React from 'react'
import AuthenticationLayout from '@/layout/AuthenticationLayout'
import style from '@/styles/Login.module.scss'
import useAuthenticationStore from '@/store/AuthenticationStore'
import { useRouter } from 'next/router'

const Registration = () => {
	const {
		userName,
		email,
		password,
		changePassword,
		changeEmail,
		isLoading,
		error,
		singUp,
		changeUserName
	} = useAuthenticationStore()
	const router = useRouter()

	const handleSingUp = () => {
		singUp(userName, email, password)
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
			<h1>Registration</h1>
			<form>
				<input
					onChange={changeUserName}
					value={userName} type='text' placeholder='Enter user name' />
				<input
					onChange={changeEmail}
					value={email} type='email' placeholder='Enter email' />
				<input
					onChange={changePassword}
					value={password} type='password' placeholder='Enter password' />
			</form>
			<button onClick={handleSingUp}>Sing Up</button>
		</div>
	</AuthenticationLayout>
	)
}

export default Registration