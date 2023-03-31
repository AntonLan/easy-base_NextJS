import { FC } from 'react'
import style from '@/styles/Table.module.scss'
import SvgSort from '@/components/table/SvgSort'

const TableHead: FC = () => {
	return (
		<thead className={style.tableHead}>
		<tr>
			<th scope='col'>
				<div>
					Progress
					<button>
						<SvgSort />
					</button>
				</div>
			</th>
			<th scope='col'>
				<div>
					Client
					<button>
						<SvgSort />
					</button>
				</div>
			</th>
			<th scope='col'>
				<div>
					Order Type
					<button>
						<SvgSort />
					</button>
				</div>
			</th>
			<th scope='col'>
				<div>
					Created At
					<button>
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

export default TableHead