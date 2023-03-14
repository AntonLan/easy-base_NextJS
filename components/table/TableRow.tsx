import { FC } from 'react'
import { OrderType } from '@/model/OrderType'
import style from '@/styles/Table.module.scss'
import { observer } from 'mobx-react'
import Link from 'next/link'

interface TableRowProps {
	order: OrderType
}

const TableRow: FC<TableRowProps> = ({order}) => {

	return (
		<tr className={style.tableRow}>
			<th scope="row" className={style.cellProgress}>
				{order.progress}
			</th>
			<td>
				{order.client}
			</td>
			<td>
				{order.orderType}
			</td>
			<td>
				{order.createdAt}
			</td>
			<td>
				<Link href="components#" className={style.edit}>Edit</Link>
			</td>
		</tr>
	)
}

export default observer(TableRow)