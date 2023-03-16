import { FC } from 'react'
import AuthenticationStore from '@/store/AuthenticationStore'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import UserInitial from '@/components/UserInitial'
import Image from 'next/image'
import Logo from '@/assets/logo/Light Logo.svg'
import style from '@/styles/Header.module.scss'
import Link from 'next/link'

interface HeaderProps {
	authenticationStore?: AuthenticationStore
}

const Header: FC<HeaderProps> = ({ authenticationStore }) => {
	return (
		<div className={style.header}>
			<Link href={'/'}>
				<Image
					src={Logo}
					alt='Easy Base Logo'
					width={73.5}
					height={41} />
			</Link>
			<div className={style.userWrapper}>
				<UserInitial/>
				<button onClick={authenticationStore?.singOut}>sing out</button>
			</div>
		</div>
	)
}

export default inject(InjectNames.AuthenticationStore)(observer(Header))