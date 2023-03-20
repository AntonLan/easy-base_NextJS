import React, { FC } from 'react'
import { OrderType } from '@/model/OrderType'

interface FormOrderProps {
	handleChange: (event: any) => void
	order: OrderType
}

const FormOrder: FC<FormOrderProps> = ({handleChange, order}) => {
	return (
		<form>
			<div>
				<label htmlFor='client'>Client Name</label>
				<input
					name='client'
					onChange={handleChange}
					value={order.client}
					id='client' type='text' placeholder='Client' />
			</div>
			<div>
				<label htmlFor='orderType'>Order Type</label>
				<input
					name='orderType'
					onChange={handleChange}
					value={order.orderType}
					id='orderType' type='text' placeholder='Order Type' />
			</div>
		</form>
	)
}

export default FormOrder