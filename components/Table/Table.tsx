import { FC } from 'react'
import TableHead from '@/components/Table/TableHead'
import TableRow from '@/components/Table/TableRow'
import UserStore from '@/store/UserStore'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import style from '@/styles/Table.module.scss'


interface TableProps {
	userStore?: UserStore
}

const Table: FC<TableProps> = ({ userStore }) => {


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