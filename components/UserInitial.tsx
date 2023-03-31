import React, { FC } from 'react'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import style from '@/styles/User.module.scss'
import { svgUtils } from '@/utils/svgUtils'
import { StoreProps } from '@/model/StoreProps'


const UserInitial: FC<StoreProps> = ({ userStore }) => {
	return (
		<div className={style.wrapper}>
			<div className={style.icon}>
				<svg fill='#379BA6' viewBox='0 0 20 20'
						 xmlns='http://www.w3.org/2000/svg'>
					<path d={svgUtils.userInitSvgPath}></path>
				</svg>
			</div>
			<span>{userStore?.user.userName}</span>
		</div>
	)
}

export default inject(InjectNames.UserStore)(observer(UserInitial))