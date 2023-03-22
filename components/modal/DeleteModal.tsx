import React, { FC } from 'react'
import UserStore from '@/store/UserStore'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import style from '@/styles/Organizations.module.scss'
import { OrderType } from '@/model/OrderType'

interface DeleteModalProps {
	userStore?: UserStore
	order: OrderType
}

const DeleteModal: FC<DeleteModalProps> = ({ userStore, order}) => {

		const handleDelete = () => {
			userStore?.deleteOrder(order)
		}

		return (
			<>
				{userStore?.isOpenDeleteModal &&
					<div onClick={userStore?.openDeleteModal}
							 className={style.modalContainer}>
						<div className={style.bgModal}></div>
						<div className={style.modalWrapper}>
							<div className={style.modalPosition}>
								<div
									onClick={e => e.stopPropagation()}
									className={style.formWrapper}>
									<div>Are you sure you want to delete the order?</div>
									<div className={style.btnContainer}>
										<button onClick={handleDelete}>
											Delete Order
										</button>
										<button className={style.btnCancel}
														onClick={userStore?.openDeleteModal}>Cancel
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				}
			</>
		)
	}

export default inject(InjectNames.UserStore)(observer(DeleteModal))