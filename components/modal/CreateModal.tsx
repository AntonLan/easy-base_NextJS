import { FC } from 'react'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import style from '@/styles/Modal.module.scss'
import FormOrganizationModalContent from '@/components/modal/modalContent/FormOrganizationModalContent'
import FormOrderModalContent from '@/components/modal/modalContent/FormOrderModalContent'
import { ModalMode } from '@/model/ModalMode'
import { StoreProps } from '@/model/StoreProps'

const CreateModal: FC<StoreProps> = ({ userStore }) => {
	return (
		<>
			{userStore?.isOpenCreateModal &&
				<div onClick={userStore?.handleClose}
						 className={style.modalContainer}>
					<div className={style.bgModal}></div>
					<div className={style.modalWrapper}>
						<div className={style.modalPosition}>
							<div
								onClick={e => e.stopPropagation()}
								className={style.formWrapper}>
								{userStore.modalMode === ModalMode.CREATE_ORDER &&
									<FormOrderModalContent
										handleChange={userStore.changeHandler}
										createOrder={userStore.createOrder}
										handleClose={userStore?.handleClose}
										order={userStore.organization} />
								}
								{userStore.modalMode === ModalMode.CREATE_ORGANIZATION &&
										<FormOrganizationModalContent
											mode={userStore.modalMode}
											handleChange={userStore.changeHandler}
											createOrganization={userStore.createOrganization}
											handleClose={userStore?.handleClose}
											organization={userStore.organization} />
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