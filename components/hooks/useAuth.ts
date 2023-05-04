import { useRouter } from 'next/router'
import { useEffect } from 'react'
import LocalUtils from '@/utils/LocalUtils'
import { stores } from '@/store/configuration/storeInitializer'

export const useAuth = (path?: string) => {
	const router = useRouter()
	const { authenticationStore } = stores


	useEffect(() => {
		checkAuth()
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

	const handleLogIn = () => {
		router.push('/login')
	}

	const handleSingUp = () => {
		router.push('/registration')
	}

	return { handleLogIn, handleSingUp }
}