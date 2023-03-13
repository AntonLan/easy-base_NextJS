import { FC } from 'react'
import style from '@/styles/Table.module.scss'
import Link from 'next/link'
import SvgSort from '@/components/Table/SvgSort'

const TableHead: FC = () => {
	return (
		<thead className={style.tableHead}>
		<tr>
			<th scope='col'>
				Progress
			</th>
			<th scope='col'>
				<div>
					Client
					<Link href='components#'>
						<SvgSort />
					</Link>
				</div>
			</th>
			<th scope='col'>
				<div>
					Order Type
					<Link href='components#'>
						<SvgSort />
					</Link>
				</div>
			</th>
			<th scope='col'>
				<div>
					Created At
					<Link href='components#'>
						<SvgSort />
					</Link>
				</div>
			</th>
			<th scope='col'>
				<span>Edit</span>
			</th>
		</tr>
		</thead>
	)
}

export default TableHead