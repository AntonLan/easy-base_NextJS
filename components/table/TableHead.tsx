import { FC } from 'react'
import style from '@/styles/Table.module.scss'
import SvgSort from '@/components/table/SvgSort'
import { StoreProps } from '@/model/StoreProps'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'

const TableHead: FC<StoreProps> = ({userStore}) => {
	return (
		<thead className={style.tableHead}>
		<tr>
			<th scope='col'>
				<div>
					Progress
					<button onClick={() => userStore?.sortUser('progress')}>
						<SvgSort />
					</button>
				</div>
			</th>
			<th scope='col'>
				<div>
					Client
					<button onClick={() => userStore?.sortUser('client')}>
						<SvgSort />
					</button>
				</div>
			</th>
			<th scope='col'>
				<div onClick={() => userStore?.sortUser('orderType')}>
					Order Type
					<button>
						<SvgSort />
					</button>
				</div>
			</th>
			<th scope='col'>
				<div>
					Created At
					<button onClick={() => userStore?.sortUser('createdAt')}>
						<SvgSort />
					</button>
				</div>
			</th>
			<th scope='col'>
				Edit Order
			</th>
			<th scope='col'>
				<span>Delete</span>
			</th>
		</tr>
		</thead>
	)
}

export default inject(InjectNames.UserStore)(observer(TableHead))