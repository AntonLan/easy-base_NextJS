import React, { FC } from 'react'
import style from '@/styles/Table.module.scss'
import { OrderType } from '@/model/OrderType'
import moment from 'moment/moment'
import UserStore from '@/store/UserStore'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import OrderProgress from '@/components/OrderProgress'

interface DropRowProps {
	order: OrderType
	userStore?: UserStore
	isOpen: (id?: string) => void
}

const DropRow: FC<DropRowProps> = ({ order, isOpen, userStore }) => {

	const handleUpdate = () => {
		userStore?.updateOrder(order)
		isOpen()
	}

	return (
		<tr className={style.dropRow} tabIndex={-1}>
			<td scope='row' className={style.cellProgress}>
				<OrderProgress defaultValue={order.progress} value={userStore?.order.progress}
											 changeProgress={userStore?.changeHandler} />
			</td>
			<td>
				<input
					name='client'
					value={userStore?.order.client || order.client}
					type='text'

					onChange={userStore?.changeHandler}
				/>
			</td>
			<td>
				<input
					name='orderType'
					value={userStore?.order.orderType || order.orderType}
					type='text'

					onChange={userStore?.changeHandler}
				/>
			</td>
			<td>{moment(order.createdAt).format('DD/MM/YYYY')}</td>
			<td>
				<button
					onClick={handleUpdate}
					type='button'
					className={style.edit}>
					Update
				</button>
			</td>
			<td>
				<button
					onClick={userStore?.handleClose}
					type='button'
					className={style.delete}>
					Cancel
				</button>
			</td>
		</tr>
	)
}

export default inject(InjectNames.UserStore)(observer(DropRow))