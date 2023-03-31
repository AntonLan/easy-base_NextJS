import { FC } from 'react'
import { svgUtils } from '@/utils/svgUtils'
import style from '@/styles/Notification.module.scss'

interface NotificationMessageProps {
	message: string
}

const NotificationMessage: FC<NotificationMessageProps> = ({ message }) => {
	return (
		<div className={style.notification} role='alert'>
  <span>
    <svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='currentColor'>
      <path fillRule='evenodd'
				d={svgUtils.notificationSvgPath} />
    </svg>
  </span>
			{message}
			{/*<button*/}
			{/*	className={style.closeBtn}>*/}
			{/*	<svg fill='#7f1d1d' viewBox='0 0 20 20'*/}
			{/*			 xmlns='http://www.w3.org/2000/svg'>*/}
			{/*		<path*/}
			{/*			d={svgUtils.closeSvgPath}*/}
			{/*		></path>*/}
			{/*	</svg>*/}
			{/*</button>*/}
		</div>
	)
}

export default NotificationMessage