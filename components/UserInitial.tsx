import React, { FC } from 'react'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import UserStore from '@/store/UserStore'
import style from '@/styles/User.module.scss'
import { svgUtils } from '@/utils/svgUtils'

interface UserInitialProps {
	userStore?: UserStore

}

const UserInitial: FC<UserInitialProps> = ({ userStore }) => {
	return (
		<div className={style.wrapper}>
			<div className={style.icon}>
				<svg fill='#379BA6' viewBox='0 0 20 20'
						 xmlns='http://www.w3.org/2000/svg'>
					<path fillRule='evenodd' d={svgUtils.userInitSvgPath} clipRule='evenodd'></path>
				</svg>
			</div>
			<span>{userStore?.user.userName}</span>
		</div>
	)
}

export default inject(InjectNames.UserStore)(observer(UserInitial))