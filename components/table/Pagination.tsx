import { FC } from 'react'
import { StoreProps } from '@/model/StoreProps'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import style from '@/styles/Pagination.module.scss'
import SvgNextButton from '@/components/table/SvgNextButton'

const Pagination: FC<StoreProps> = ({ tableStore, userStore }) => {
	return (
		<div className={style.container}>
			<div className={style.wrapper}>
				<SvgNextButton title={'Previous'} handleClick={tableStore?.previousPage} />
				<div className={style.page}>
					{tableStore?.getPages(userStore?.user.orders?.length).map((page) => (
						<p onClick={() => tableStore?.changePage(page)}
							 key={page}
							 className={tableStore?.currentPage === page ? style.pageActive : ''}
						>{page}</p>
					))}
				</div>
				<SvgNextButton title={'Next'} handleClick={tableStore?.nextPage} />
			</div>
		</div>
	)
}

export default inject(InjectNames.TableStore, InjectNames.UserStore)(observer(Pagination))