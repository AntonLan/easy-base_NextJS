import { FC } from 'react'
import Link from 'next/link'
import style from '@/styles/SideBar.module.scss'
import UserStore from '@/store/UserStore'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import { useRouter } from 'next/router'

interface SideBarProps {
	userStore?: UserStore
}


const SideBar: FC<SideBarProps> = ({ userStore }) => {
	const router = useRouter()
	const currentRoute = router.pathname

	return (
		<div className={style.sidebarContainer}>
			<div className={style.sidebar}>
				<ul>
					<li>
						<Link href='/' className={currentRoute !== '/'
							? style.navigation
							: style.navigationActive}>
							<span>Easy Base</span>
						</Link>
					</li>
					<li>
						<Link href='/organization' className={currentRoute !== '/organization'
							? style.navigation
							: style.navigationActive}>
							<span>Organization</span>
						</Link>
					</li>
					<li>
						<button
							onClick={userStore?.openModal}
							className={style.createBtn}>
							Create organization
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default inject(InjectNames.UserStore)(observer(SideBar))