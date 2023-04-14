import { FC } from 'react'
import { ModalMode } from '@/model/ModalMode'
import { StoreProps } from '@/model/StoreProps'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import { UserGroupIcon } from '@heroicons/react/24/solid'
import { PlusIcon } from '@heroicons/react/24/solid'
import style from '@/styles/ContentBar.module.scss'

const ContentBar: FC<StoreProps> = ({userStore}) => {

	const handleOpen = (mode: ModalMode) => {
		userStore?.changeMode(mode)
		userStore?.openModal()
	}


	return (
		<div className={style.container}>
			<input
				type='search'
				placeholder='Search'
			/>
			<div className='flex gap-3'>
				<button
					className={style.createBtn}
					onClick={() => handleOpen(ModalMode.CREATE_ORDER)}>
					<PlusIcon width={16}/>
					Create Order
				</button>
				<button
					onClick={() => handleOpen(ModalMode.CREATE_ORGANIZATION)}
					className={style.createBtn}>
					<UserGroupIcon width={14}/>
					Create organization
				</button>
			</div>



		</div>
	)
}

export default inject(InjectNames.UserStore)(observer(ContentBar))