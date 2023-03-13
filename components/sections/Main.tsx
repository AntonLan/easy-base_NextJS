import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import UserStore from '@/store/UserStore'
import AuthenticationStore from '@/store/AuthenticationStore'
import Table from '@/components/Table/Table'

interface MainProps {
	userStore?: UserStore
	authenticationStore?: AuthenticationStore
}


const Main: FC<MainProps> = ({ userStore, authenticationStore }) => {
	const router = useRouter()


	useEffect(() => {
		checkAuth()
		let id = localStorage.getItem('id')
		let token = localStorage.getItem('token')
		if (id && token) {
			userStore?.getUserData(id, token)
		}
	}, [authenticationStore?.isAuth])

	const checkAuth = () => {
		let token = localStorage.getItem('token')
		if (!token) {
			router.replace('/login')
		}
	}

	return (
		<>
			<h1 className='text-center mt-2 mb-1'>Easy Base</h1>
			<Table/>
		</>
	)
}

export default inject(InjectNames.UserStore, InjectNames.AuthenticationStore)(observer(Main))