import React, { FC } from 'react'
import UserStore from '@/store/UserStore'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import style from '@/styles/Organizations.module.scss'

interface CreateOrganizationModal {
	userStore?: UserStore
}

const CreateOrganizationModal: FC<CreateOrganizationModal> = ({ userStore }) => {


	return (
		<>
			{userStore?.isOpen &&
				<div onClick={userStore?.openModal} className={style.modalContainer} aria-labelledby='modal-title' role='dialog' aria-modal='true'>
					<div className={style.bgModal}></div>
					<div className={style.modalWrapper}>
						<div className={style.modalPosition}>
							<div
								onClick={e => e.stopPropagation()}
								className={style.formWrapper}>
								<form>
									<div>
										<label htmlFor='name'>Name</label>
										<input
											name='name'
											onChange={userStore.changeOrganizationHandler}
											value={userStore.organization.name}
											id='name' type='text' placeholder='Name' />
									</div>
									<div>
										<label htmlFor='email'>Email</label>
										<input
											name='email'
											onChange={userStore.changeOrganizationHandler}
											value={userStore.organization.email}
											id='email' type='text' placeholder='Email' />
									</div>
									<div>
										<label htmlFor='phone'>Phone</label>
										<input
											name='phone'
											onChange={userStore.changeOrganizationHandler}
											value={userStore.organization.phone}
											id='phone' type='text' placeholder='Phone' />
									</div>
									<div>
										<label htmlFor='formOrganization'>Form Organization</label>
										<input
											name='formOrganization'
											onChange={userStore.changeOrganizationHandler}
											value={userStore.organization.formOrganization}
											id='formOrganization' type='text' placeholder='Form Organization' />
									</div>
									<div>
										<label htmlFor='character'>Character</label>
										<input
											name='character'
											onChange={userStore.changeOrganizationHandler}
											value={userStore.organization.character}
											id='character' type='text' placeholder='Character' />
									</div>
								</form>
								<div className={style.btnContainer}>
									<button onClick={userStore.createOrganization}>Create
									</button>
									<button className={style.btnCancel}
										onClick={userStore?.openModal}>Cancel
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

export default inject(InjectNames.UserStore)(observer(CreateOrganizationModal))