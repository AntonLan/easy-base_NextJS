import { FC } from 'react'
import style from '@/styles/Table.module.scss'
import { OrderType } from '@/model/OrderType'
import moment from 'moment/moment'

interface DropRowProps {
	order: OrderType
}

const DropRow: FC<DropRowProps> = ({order}) => {
	return (
		<tr className={style.dropRow} tabIndex={-1}>
			<th scope='row' className={style.cellProgress}>{order.progress}</th>
			<td>{order.client}</td>
			<td>{order.orderType}</td>
			<td>{moment(order.createdAt).format('DD/MM/YYYY')}</td>
			<td><button type='button' className={style.edit}>Edit
			</button>
			</td>
		</tr>
	)
}

export default DropRow