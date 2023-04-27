import { useRouter } from 'next/router'
import { useEffect } from 'react'
import LocalUtils from '@/utils/LocalUtils'
import AuthenticationStore from '@/store/AuthenticationStore'
import UserStore from '@/store/UserStore'

export const useAuth = (path: string) => {
	const router = useRouter()
	const authenticationStore = new AuthenticationStore()
	const userStore = new UserStore()


	useEffect(() => {
		checkAuth()
		getData()
	}, [authenticationStore?.isAuth])

	const checkAuth = () => {
		if (!LocalUtils.getToken()) {
			router.replace(path)
		}
	}

	const getData = () => {
		let { id, token } = LocalUtils.getLocalData()
		if (id && token) {
			userStore?.getUserData(id, token)
		}
	}

	const handleLogIn = () => {
		authenticationStore?.singIn()
	}

	const handleSingUp = () => {
		router.push('/registration')
	}

	return { handleLogIn, handleSingUp, getData, checkAuth }
}