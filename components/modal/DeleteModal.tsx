import React, { FC } from 'react'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import style from '@/styles/Modal.module.scss'
import DeleteModalContent from '@/components/modal/modalContent/DeleteModalContent'
import { ModalProps } from '@/model/ModalProps'

const DeleteModal: FC<ModalProps> = ({ userStore}) => {
		return (
			<>
				{userStore?.isOpenDeleteModal &&
					<div onClick={userStore?.handleClose}
							 className={style.modalContainer}>
						<div className={style.bgModal}></div>
						<div className={style.modalWrapper}>
							<div className={style.modalPosition}>
								<div
									onClick={e => e.stopPropagation()}
									className={style.formWrapper}>
									<DeleteModalContent/>
								</div>
							</div>
						</div>
					</div>
				}
			</>
		)
	}

export default inject(InjectNames.UserStore)(observer(DeleteModal))