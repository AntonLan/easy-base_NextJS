import { FC } from 'react'
import AuthenticationStore from '@/store/AuthenticationStore'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import UserInitial from '@/components/UserInitial'
import style from '@/styles/Header.module.scss'

interface HeaderProps {
	authenticationStore?: AuthenticationStore
}

const Header: FC<HeaderProps> = ({ authenticationStore }) => {
	return (
		<div className={style.header}>
			<h1>Header</h1>
			<div className={style.userWrapper}>
				<UserInitial/>
				<button onClick={authenticationStore?.singOut}>sing out</button>
			</div>
		</div>
	)
}

export default inject(InjectNames.AuthenticationStore)(observer(Header))