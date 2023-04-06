import { FC } from 'react'
import { StoreProps } from '@/model/StoreProps'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import style from '@/styles/Pagination.module.scss'

const Pagination: FC<StoreProps> = ({tableStore,userStore}) => {
	const pagesArray = tableStore?.getPages(userStore?.user.orders?.length)

	return (
		<div className={style.container}>
			<div className={style.wrapper}>
				<button>
					<svg width={14} height={8} viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M1.1665 4H12.8332' stroke='currentColor' strokeWidth='1.25' strokeLinecap='round'
									strokeLinejoin='round' />
						<path d='M1.1665 4L4.49984 7.33333' stroke='currentColor' strokeWidth='1.25' strokeLinecap='round'
									strokeLinejoin='round' />
						<path d='M1.1665 4.00002L4.49984 0.666687' stroke='currentColor' strokeWidth='1.25' strokeLinecap='round'
									strokeLinejoin='round' />
					</svg>
					<p>Previous</p>
				</button>
				<div className={style.page}>
					{pagesArray?.map((page, index) => (
						<p onClick={() => tableStore?.changePage(page)}
							key={page}
							 className={tableStore?.currentPage === page ? style.pageActive : ''}
							>{page}</p>
					))}
				</div>
				<button>
					<p>Next</p>
					<svg width={14} height={8} viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M1.1665 4H12.8332' stroke='currentColor' strokeWidth='1.25' strokeLinecap='round'
									strokeLinejoin='round' />
						<path d='M9.5 7.33333L12.8333 4' stroke='currentColor' strokeWidth='1.25' strokeLinecap='round'
									strokeLinejoin='round' />
						<path d='M9.5 0.666687L12.8333 4.00002' stroke='currentColor' strokeWidth='1.25' strokeLinecap='round'
									strokeLinejoin='round' />
					</svg>
				</button>
			</div>
		</div>
	)
}

export default inject(InjectNames.TableStore, InjectNames.UserStore)(observer(Pagination))