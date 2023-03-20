import { FC } from 'react'
import Link from 'next/link'
import style from '@/styles/NotFoundPage.module.scss'

const NotFoundPage: FC = () => {
	return (
		<div className={style.container}>
			<h1 >404</h1>
			<div className={style.title}>
				Page Not Found
			</div>
			<button>
				<Link href={'/'}>
					<div
						className='relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring'>
						<span
							className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0'></span>
						<span className={style.text}>
          <div>Go Home</div>
        </span>
					</div>
				</Link>
			</button>
		</div>
	)
}

export default NotFoundPage