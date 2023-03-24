import React, { FC, useState } from 'react'
import { OrderType } from '@/model/OrderType'
import style from '@/styles/Table.module.scss'
import { inject, observer } from 'mobx-react'
import DropRow from '@/components/table/DropRow'
import moment from 'moment'
import InjectNames from '@/store/configuration/storeIdentifier'
import UserStore from '@/store/UserStore'

interface TableRowProps {
	userStore?: UserStore
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
					<button type='button'
									onClick={() => userStore?.handleOpen(order._id)}
									className={style.edit}
									id='menu-button' aria-expanded='true' aria-haspopup='true'>Edit
					</button>
				</td>
				<td>
					<button type='button'
									onClick={() => userStore?.openDeleteModal(order)}
									className={style.delete}
									id='menu-button' aria-expanded='true' aria-haspopup='true'>Delete
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