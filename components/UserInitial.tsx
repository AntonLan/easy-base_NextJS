import { FC } from 'react'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import style from '@/styles/User.module.scss'
import { svgUtils } from '@/utils/svgUtils'
import { StoreProps } from '@/model/StoreProps'


const UserInitial: FC<StoreProps> = ({ userStore }) => {

	return (
		<div
			onClick={userStore?.openUserMenu}
			className={style.wrapper}>
			<div
				className={style.icon}>
				<svg fill='#379BA6' viewBox='0 0 20 20'
						 xmlns='http://www.w3.org/2000/svg'>
					<path d={svgUtils.userInitSvgPath}></path>
				</svg>
			</div>

			{userStore?.isUserDropMenu &&
				<div
					onClick={userStore?.handleClose}
					className='w-[100px] h-[100px] rounded-2xl absolute top-[50px] z-50 bg-light-gray shadow-md'>
					<div
						className='p-3.5 text-black'>{userStore?.user.userName}</div>
				</div>
			}
		</div>
	)
}

export default inject(InjectNames.UserStore)(observer(UserInitial))