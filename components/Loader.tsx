import { FC } from 'react'
import style from '@/styles/Loader.module.scss'


const Loader: FC = () => {
	return (
		<div className={style.loading}>
			<div className={style.spinner}></div>
		</div>
	)
}

export default Loader