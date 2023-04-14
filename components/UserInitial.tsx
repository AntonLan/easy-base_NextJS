import { FC } from 'react'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import style from '@/styles/User.module.scss'
import { svgUtils } from '@/utils/svgUtils'
import { StoreProps } from '@/model/StoreProps'
import Link from 'next/link'

interface UserInitialProps extends StoreProps {
	handleSingOut: () => void

}


const UserInitial: FC<UserInitialProps> = ({ userStore, handleSingOut }) => {

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
				<div
					className={style.menuContainer}
					onClick={userStore?.handleClose}>
					<div className={style.bgMenu}></div>
					<div
						onClick={(e) => e.stopPropagation()}
						className={style.dropMenu}>
						<Link href='/about'>
							<h1>About</h1>
						</Link>
						<h1>User: {userStore?.user.userName}</h1>
						<button>sing out</button>
					</div>
				</div>
			}
		</div>
	)
}

export default inject(InjectNames.UserStore)(observer(UserInitial))