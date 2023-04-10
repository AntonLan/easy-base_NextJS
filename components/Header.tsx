import { FC } from 'react'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import UserInitial from '@/components/UserInitial'
import Image from 'next/image'
import Logo from '@/assets/logo/Light Logo.svg'
import style from '@/styles/Header.module.scss'
import Link from 'next/link'
import { StoreProps } from '@/model/StoreProps'


const Header: FC<StoreProps> = ({ authenticationStore }) => {
	return (
		<div className={style.header}>
			<Link href='/'>
				<Image
					priority={true}
					src={Logo}
					alt='Easy Base Logo'
					width={74} />
			</Link>
			<div className={style.userWrapper}>
				<UserInitial/>
				<button onClick={authenticationStore?.singOut}>sing out</button>
			</div>
		</div>
	)
}

export default inject(InjectNames.AuthenticationStore)(observer(Header))