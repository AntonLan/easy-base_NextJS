import { FC, useState } from 'react'
import { OrderType } from '@/model/OrderType'
import style from '@/styles/Table.module.scss'
import { observer } from 'mobx-react'
import DropRow from '@/components/table/DropRow'
import moment from 'moment'

interface TableRowProps {
	order: OrderType
}

const TableRow: FC<TableRowProps> = ({order}) => {
	const [isOpen, setIsOpen] = useState(false)


	const handleOpen = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<>
		<tr className={style.tableRow}>
			<td scope='row' className={style.cellProgress}>
				{order.progress}
			</td>
			<td>
				{order.client}
			</td>
			<td>
				{order.orderType}
			</td>
			<td>
				{moment(order.createdAt).format('DD/MM/YYYY')}
			</td>
			<td>
				<button type='button'
								onClick={handleOpen}
								className={style.edit}
								id='menu-button' aria-expanded='true' aria-haspopup='true'>Edit
				</button>
			</td>
		</tr>
			{isOpen &&
				<DropRow order={order} isOpen={handleOpen}/>
			}



		</>
	)
}

export default observer(TableRow)