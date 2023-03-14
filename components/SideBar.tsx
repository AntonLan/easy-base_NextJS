import { FC } from 'react'
import Link from 'next/link'
import style from '@/styles/SideBar.module.scss'

const SideBar: FC = () => {
	return (
		<div className={style.sidebarContainer}>
			<div className={style.sidebar}>
				<ul>
					<li>
						<Link href='/' className={style.navigation}>
							<span>Easy Base</span>
						</Link>
					</li>
					<li>
						<Link href='/organization' className={style.navigation}>
							<span>organization</span>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default SideBar