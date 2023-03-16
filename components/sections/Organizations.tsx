import { FC, useEffect } from 'react'
import UserStore from '@/store/UserStore'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import Card from '@/components/Card'
import AuthenticationStore from '@/store/AuthenticationStore'
import { useRouter } from 'next/router'
import style from '@/styles/Organizations.module.scss'
import LocalUtils from '@/utils/LocalUtils'


interface OrganizationsProps {
	userStore?: UserStore
	authenticationStore?: AuthenticationStore
}

const Organizations: FC<OrganizationsProps> = ({ userStore, authenticationStore }) => {
	const router = useRouter()


	useEffect(() => {
		checkAuth()
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