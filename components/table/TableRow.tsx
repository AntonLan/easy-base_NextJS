import React, { FC, useState } from 'react'
import { OrderType } from '@/model/OrderType'
import style from '@/styles/Table.module.scss'
import { inject, observer } from 'mobx-react'
import DropRow from '@/components/table/DropRow'
import moment from 'moment'
import InjectNames from '@/store/configuration/storeIdentifier'
import UserStore from '@/store/UserStore'
import userStore from '@/store/UserStore'
import DeleteModal from '@/components/modal/DeleteModal'

interface TableRowProps {
	userStore?: UserStore
	order: OrderType
}

const TableRow: FC<TableRowProps> = ({ order, userStore }) => {
	const [isOpen, setIsOpen] = useState(false)


	const handleOpen = () => {
		setIsOpen(prev => !prev)
	}


	return (
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
			<td>
				<button type='button'
								onClick={userStore?.openDeleteModal}
								className={style.delete}
								id='menu-button' aria-expanded='true' aria-haspopup='true'>Delete
				</button>
			</td>
			{isOpen &&
				<DropRow order={order} isOpen={handleOpen} />
			}
			<DeleteModal order={order} />
		</tr>

	)
}

export default inject(InjectNames.UserStore)(observer(TableRow))