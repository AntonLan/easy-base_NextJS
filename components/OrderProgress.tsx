import { FC } from 'react'
import { ProgressEnum } from '@/model/ProgressEnum'


interface OrderProgressProps {
	defaultValue?: ProgressEnum
	value?: ProgressEnum
	changeProgress?: (event: any) => void
}

const OrderProgress: FC<OrderProgressProps> = ({defaultValue, value, changeProgress}) => {
	return (
		<select name="progress"
						defaultValue={defaultValue}
						value={value}
						onChange={changeProgress}>
			<option value={ProgressEnum.NOT_STARTED}>{ProgressEnum.NOT_STARTED}</option>
			<option value={ProgressEnum.IN_PROGRESS}>{ProgressEnum.IN_PROGRESS}</option>
			<option value={ProgressEnum.COMPLETED}>{ProgressEnum.COMPLETED}</option>
			<option value={ProgressEnum.CANCELED}>{ProgressEnum.CANCELED}</option>
		</select>
	)
}

export default OrderProgress