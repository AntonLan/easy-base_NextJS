import React, { FC } from 'react'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import UserStore from '@/store/UserStore'
import style from '@/styles/User.module.scss'

interface UserInitialProps {
	userStore?: UserStore

}

const UserInitial: FC<UserInitialProps> = ({ userStore }) => {
	return (
		<div className={style.wrapper}>
			<div className={style.icon}>
				<svg fill='currentColor' viewBox='0 0 20 20'
						 xmlns='http://www.w3.org/2000/svg'>
					<path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd'></path>
				</svg>
			</div>
			<span>{userStore?.user.userName}</span>
		</div>
	)
}

export default inject(InjectNames.UserStore)(observer(UserInitial))