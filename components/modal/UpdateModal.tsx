import React, { FC } from 'react'
import style from '@/styles/Modal.module.scss'
import { ModalProps } from '@/model/ModalProps'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'

const UpdateModal: FC<ModalProps> = ({userStore}) => {
	return (
		<>
			{userStore?.isOpenUpdateModal &&
				<div onClick={userStore?.handleClose}
						 className={style.modalContainer}>
					<div className={style.bgModal}></div>
					<div className={style.modalWrapper}>
						<div className={style.modalPosition}>
							<div
								onClick={e => e.stopPropagation()}
								className={style.formWrapper}>
								Update
								<div className={style.btnContainer}>
									<button onClick={() => userStore?.deleteOrder()}>
										Apply Change
									</button>
									<button className={style.btnCancel}
													onClick={userStore?.handleClose}>Cancel
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

export default inject(InjectNames.UserStore)(observer(UpdateModal))