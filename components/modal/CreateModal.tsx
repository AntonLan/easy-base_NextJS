import React, { FC } from 'react'
import UserStore from '@/store/UserStore'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import style from '@/styles/Organizations.module.scss'
import FormOrganization from '@/components/FormOrganization'
import FormOrder from '@/components/FormOrder'
import { ModalMode } from '@/model/ModalMode'

interface ModalProps {
	userStore?: UserStore
}

const CreateModal: FC<ModalProps> = ({ userStore }) => {


	return (
		<>
			{userStore?.isOpenCreateModal &&
				<div onClick={userStore?.openModal}
						 className={style.modalContainer}>
					<div className={style.bgModal}></div>
					<div className={style.modalWrapper}>
						<div className={style.modalPosition}>
							<div
								onClick={e => e.stopPropagation()}
								className={style.formWrapper}>
								{userStore.modalMode === ModalMode.CREATE_ORDER &&
									<>
										<FormOrder handleChange={userStore.changeHandler} order={userStore.organization} />
										<div className={style.btnContainer}>
											<button onClick={userStore.createOrder}>
												Create Order
											</button>
											<button className={style.btnCancel}
															onClick={userStore?.openModal}>Cancel
											</button>
										</div>
									</>
								}
								{userStore.modalMode === ModalMode.CREATE_ORGANIZATION &&
									<>
									<FormOrganization handleChange={userStore.changeHandler}
																		organization={userStore.organization} />
										<div className={style.btnContainer}>
											<button onClick={userStore.createOrganization}>
												Create Organization
											</button>
											<button className={style.btnCancel}
															onClick={userStore?.openModal}>Cancel
											</button>
										</div>
									</>
								}
							</div>
						</div>
					</div>
				</div>
			}
		</>
	)
}

export default inject(InjectNames.UserStore)(observer(CreateModal))