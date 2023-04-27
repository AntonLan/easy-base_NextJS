import { useRouter } from 'next/router'
import { useEffect } from 'react'
import LocalUtils from '@/utils/LocalUtils'
import AuthenticationStore from '@/store/AuthenticationStore'
import UserStore from '@/store/UserStore'

export const useAuth = (path: string) => {
	const router = useRouter()
	const authenticationStore = new AuthenticationStore()
	const userStore= new UserStore()


	useEffect(() => {
		checkAuth()
		let { id, token } = LocalUtils.getLocalData()
		if (id && token) {
			userStore?.getUserData(id, token)
		}
	}, [authenticationStore?.isAuth])

	const checkAuth = () => {
		if (!LocalUtils.getToken()) {
			router.replace(path)
		}
	}
}