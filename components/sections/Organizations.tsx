import { FC, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import Card from '@/components/Card'
import { useRouter } from 'next/router'
import style from '@/styles/Organizations.module.scss'
import LocalUtils from '@/utils/LocalUtils'
import { StoreProps } from '@/model/StoreProps'

const Organizations: FC<StoreProps> = ({ userStore, authenticationStore }) => {
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
		if (!LocalUtils.getToken()) {
			router.replace('/login')
		}
	}

	return (
		<div className={style.cardContainer}>
			{userStore?.user.organizations?.map(o => (
				<Card key={o._id} organization={o}/>
			))}
		</div>
	)
}

export default inject(InjectNames.UserStore, InjectNames.AuthenticationStore)(observer(Organizations))