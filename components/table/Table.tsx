import { FC } from 'react'
import TableHead from '@/components/table/TableHead'
import TableRow from '@/components/table/TableRow'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import style from '@/styles/Table.module.scss'
import { StoreProps } from '@/model/StoreProps'
import Pagination from '@/components/table/Pagination'

const Table: FC<StoreProps> = ({ userStore, tableStore}) => {
	const actualOrder = tableStore?.getActualOrders(userStore?.user?.orders)


	return (
		<div className={style.tableContainer}>
			<table className={style.table}>
				<TableHead />
				<tbody>
				{actualOrder?.map(order => (
					<TableRow key={order?._id} order={order} />
				))}
				</tbody>
			</table>
			<Pagination />
		</div>
	)
}

export default inject(InjectNames.UserStore, InjectNames.TableStore)(observer(Table))