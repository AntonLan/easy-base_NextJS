import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import Table from '@/components/table/Table'
import LocalUtils from '@/utils/LocalUtils'
import { StoreProps } from '@/model/StoreProps'

const Main: FC<StoreProps> = ({ userStore, authenticationStore }) => {
	const router = useRouter()


	useEffect(() => {
		checkAuth()
		let id = LocalUtils.getUserId()
		let token = LocalUtils.getToken()
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
			<Table />
		</>
	)
}

export default inject(InjectNames.UserStore, InjectNames.AuthenticationStore)(observer(Main))