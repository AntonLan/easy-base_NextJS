import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import MainLayout from '@/layout/MainLayout'
import ToggleDarkMode from '@/components/ToggleDarkMode'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import UserStore from '@/store/UserStore'
import AuthenticationStore from '@/store/AuthenticationStore'

interface MainProps {
	userStore?: UserStore
	authenticationStore?: AuthenticationStore
}


const Main: FC<MainProps> = ({userStore, authenticationStore}) => {
	const router = useRouter()


	useEffect(() => {
		checkAuth()
		const id = localStorage.getItem('id')
		const token = localStorage.getItem('token')
		if (id && token) {
			userStore?.getUserData(id, token)
		}
	}, [authenticationStore?.isAuth])

	const checkAuth = () => {
		let token = localStorage.getItem('token')
		if (!token) {
			router.push('/login')
		}
	}

	return (
		<MainLayout>
			<div className='bg-amber-400 dark:bg-black w-[200px] h-[200px]'>
				{/*<ToggleDarkMode />*/}
				<button onClick={authenticationStore?.singOut}>sing out</button>
			</div>
		</MainLayout>
	)
}

export default inject(InjectNames.UserStore, InjectNames.AuthenticationStore)(observer(Main))