import React, { FC } from 'react'
import style from '@/styles/Modal.module.scss'
import UserStore from '@/store/UserStore'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'

interface DeleteModalContentProps {
	userStore?: UserStore
}

const DeleteModalContent: FC<DeleteModalContentProps> = ({ userStore }) => {
	return (
		<>
			<h1 className={style.deleteText}>Are you sure you want to delete the order?</h1>
			<div className={style.btnContainer}>
				<button onClick={() => userStore?.deleteOrder()}>
					Delete Order
				</button>
				<button className={style.btnCancel}
								onClick={userStore?.handleClose}>Cancel
				</button>
			</div>
		</>
	)
}

export default inject(InjectNames.UserStore)(observer(DeleteModalContent))