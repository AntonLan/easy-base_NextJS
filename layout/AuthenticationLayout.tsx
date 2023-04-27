import { FC, useEffect } from 'react'
import Head from 'next/head'
import { LayoutProps } from '@/model/LayoutProps'
import { useRouter } from 'next/router'
import LocalUtils from '@/utils/LocalUtils'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'

const AuthenticationLayout: FC<LayoutProps> = ({children, authenticationStore}) => {
	const router = useRouter()

	useEffect(() => {
		checkAuth()
	}, [authenticationStore?.isAuth])


	const checkAuth = () => {
		if (LocalUtils.getToken()) {
			router.replace('/')
		}
	}

	return (
		<>
			<Head>
				<title>Authentication</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<main>
				{children}
			</main>
		</>
	)
}

export default inject(InjectNames.AuthenticationStore)(observer(AuthenticationLayout))