import React, { FC } from 'react'
import { OrderType } from '@/model/OrderType'
import style from '@/styles/Modal.module.scss'

interface FormOrderProps {
	handleChange: (event: any) => void
	createOrder: () => void
	handleClose: () => void
	order: OrderType
}

const FormOrderModalContent: FC<FormOrderProps> =
	({ handleChange,
		 order,
		 createOrder,
		 handleClose }) => {
	return (
		<>
			<form>
				<div>
					<h1>Client Name</h1>
					<input
						name='client'
						onChange={handleChange}
						value={order.client}
						id='client' type='text' placeholder='Client' />
				</div>
				<div>
					<h1>Order Type</h1>
					<input
						name='orderType'
						onChange={handleChange}
						value={order.orderType}
						id='orderType' type='text' placeholder='Order Type' />
				</div>
			</form>
			<div className={style.btnContainer}>
				<button onClick={createOrder}>
					Create Order
				</button>
				<button className={style.btnCancel}
								onClick={handleClose}>Cancel
				</button>
			</div>
		</>
	)
}

export default FormOrderModalContent