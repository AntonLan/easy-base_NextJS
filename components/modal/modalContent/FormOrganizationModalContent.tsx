import { FC } from 'react'
import { OrganizationType } from '@/model/OrganizationType'
import style from '@/styles/Modal.module.scss'
import { ModalMode } from '@/model/ModalMode'


interface FormOrganizationProps {
	mode?: ModalMode
	handleChange: (event: any) => void
	createOrganization?: () => void
	updateOrganization?: (organization: OrganizationType) => void
	handleClose: () => void
	organization: OrganizationType
}

const FormOrganizationModalContent: FC<FormOrganizationProps> =
	({
		 handleChange,
		 organization,
		 createOrganization,
		 updateOrganization,
		 mode,
		 handleClose
	 }) => {
		return (
			<>
				<form>
					<div>
						<h1>Name</h1>
						<input
							name='name'
							onChange={handleChange}
							value={organization.name || ''}
							type='text'
							placeholder='Name' />
					</div>
					<div>
						<h1>Email</h1>
						<input
							name='email'
							onChange={handleChange}
							value={organization.email || ''}
							type='text'
							placeholder='Email' />
					</div>
					<div>
						<h1>Phone</h1>
						<input
							name='phone'
							onChange={handleChange}
							value={organization.phone || ''}
							type='text'
							placeholder='Phone' />
					</div>
					<div>
						<h1>Form Organization</h1>
						<input
							name='formOrganization'
							onChange={handleChange}
							value={organization.formOrganization || ''}
							type='text'
							placeholder='Form Organization' />
					</div>
					<div>
						<h1>Character</h1>
						<input
							name='character'
							onChange={handleChange}
							value={organization.character || ''}
							type='text'
							placeholder='Character' />
					</div>
				</form>
				<div className={style.btnContainer}>
					{mode === ModalMode.UPDATE_ORGANIZATION &&
						<button onClick={() => updateOrganization!(organization)}>
							Update Organization
						</button>
					}
					{mode === ModalMode.CREATE_ORGANIZATION &&
						<button onClick={createOrganization}>
							Create Organization
						</button>
					}
					<button className={style.btnCancel}
									onClick={handleClose}>Cancel
					</button>
				</div>
			</>
		)
	}

export default FormOrganizationModalContent