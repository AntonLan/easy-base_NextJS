import { FC } from 'react'
import Link from 'next/link'
import style from '@/styles/SideBar.module.scss'
import { useRouter } from 'next/router'


const SideBar: FC = () => {
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
				</ul>
			</div>
		</div>
	)
}

export default SideBar