import { useRouter } from 'next/router'
import { useEffect } from 'react'
import LocalUtils from '@/utils/LocalUtils'
import { stores } from '@/store/configuration/storeInitializer'

export const useAuth = (path?: string) => {
	const router = useRouter()
	const { authenticationStore, userStore } = stores


	useEffect(() => {
		checkAuth()
		getData()
	}, [authenticationStore?.isAuth])

	const checkAuth = () => {
		switch (path) {
			case '/login':
				if (!LocalUtils.getToken()) router.replace(path)
				return
			case '/':
				if (LocalUtils.getToken()) router.replace(path)
				return
		}
	}

	const getData = () => {
		let { id, token } = LocalUtils.getLocalData()
		if (id && token) {
			userStore?.getUserData(id, token)
		}
	}

	const handleLogIn = () => {
		router.push('/login')
	}

	const handleSingUp = () => {
		router.push('/registration')
	}

	return { handleLogIn, handleSingUp, getData, checkAuth }
}