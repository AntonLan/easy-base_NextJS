import { FC } from 'react'
import { OrderType } from '@/model/OrderType'
import style from '@/styles/Table.module.scss'
import { inject, observer } from 'mobx-react'
import DropRow from '@/components/table/DropRow'
import moment from 'moment'
import InjectNames from '@/store/configuration/storeIdentifier'
import { StoreProps } from '@/model/StoreProps'

interface TableRowProps extends StoreProps {
	order: OrderType
}

const TableRow: FC<TableRowProps> = ({ order, userStore }) => {
	return (
		<>
			<tr className={style.tableRow}>
				<td scope='row' className={style.cellProgress}>{order.progress}</td>
				<td>{order.client}</td>
				<td>{order.orderType}</td>
				<td>{moment(order.createdAt).format('DD/MM/YYYY')}</td>
				<td>
					<button onClick={() => userStore?.handleOpen(order._id)}
									className={style.edit}>Edit
					</button>
				</td>
				<td>
					<button onClick={() => userStore?.openDeleteModal(order)}
									className={style.delete}>Delete
					</button>
				</td>
			</tr>
			{order.isSelected &&
				<DropRow order={order} isOpen={userStore?.handleOpen!} />
			}
		</>
	)
}

export default inject(InjectNames.UserStore)(observer(TableRow))