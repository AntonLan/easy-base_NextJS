import { FC } from 'react'
import TableHead from '@/components/table/TableHead'
import TableRow from '@/components/table/TableRow'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import style from '@/styles/Table.module.scss'
import { StoreProps } from '@/model/StoreProps'

const Table: FC<StoreProps> = ({ userStore }) => {


	return (
		<div className={style.tableContainer}>
			<table className={style.table}>
				<TableHead />
				<tbody>
				{userStore?.user.orders?.map( order => (
					<TableRow key={order._id} order={order}/>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default inject(InjectNames.UserStore)(observer(Table))