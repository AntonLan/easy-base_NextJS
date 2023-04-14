import { FC } from 'react'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import style from '@/styles/User.module.scss'
import { svgUtils } from '@/utils/svgUtils'
import { StoreProps } from '@/model/StoreProps'

interface UserInitialProps extends StoreProps {
	handleSingOut: () => void

}


const UserInitial: FC<UserInitialProps> = ({ userStore , handleSingOut}) => {

	const singOut = () => {
		handleSingOut()
		userStore?.handleClose()
	}

	return (
		<div className='relative z-10'>
			<div onClick={userStore?.openUserMenu}
					 className={style.wrapper}>
				<div className={style.icon}>
					<svg fill='#379BA6' viewBox='0 0 20 20'
							 xmlns='http://www.w3.org/2000/svg'>
						<path d={svgUtils.userInitSvgPath}></path>
					</svg>
				</div>
			</div>
				{userStore?.isUserDropMenu &&
					<div onClick={userStore?.handleClose}>
						<div
							onClick={(e) => e.stopPropagation()}
							className='w-[150px] rounded-2xl transition-all duration-500 absolute top-[50px] right-[10px] z-50 bg-light-gray shadow-md'>
						<div className='px-3.5 py-2 cursor-pointer text-black'>User: {userStore?.user.userName}</div>
						<button className='px-3.5 py-2 text-black cursor-pointer' onClick={singOut}>sing out</button>
						</div>
					</div>
				}
		</div>
	)
}

export default inject(InjectNames.UserStore)(observer(UserInitial))