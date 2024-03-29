import { FC } from 'react'
import style from '@/styles/Modal.module.scss'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import FormOrganizationModalContent from '@/components/modal/modalContent/FormOrganizationModalContent'
import { StoreProps } from '@/model/StoreProps'

const UpdateModal: FC<StoreProps> = ({ userStore }) => {
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
								<FormOrganizationModalContent
									mode={userStore.modalMode}
									updateOrganization={userStore.updateOrganization}
									handleChange={userStore.changeHandler}
									handleClose={userStore.handleClose}
									organization={userStore.organization} />
							</div>
						</div>
					</div>
				</div>
			}
		</>
	)
}

export default inject(InjectNames.UserStore)(observer(UpdateModal))