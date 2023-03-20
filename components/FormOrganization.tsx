import { FC } from 'react'
import { OrganizationType } from '@/model/OrganizationType'



interface FormOrganizationProps {
	handleChange: (event: any) => void
	organization: OrganizationType
}

const FormOrganization: FC<FormOrganizationProps> = ({handleChange, organization}) => {
	return (
		<form>
			<div>
				<label htmlFor='name'>Name</label>
				<input
					name='name'
					onChange={handleChange}
					value={organization.name}
					id='name' type='text' placeholder='Name' />
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<input
					name='email'
					onChange={handleChange}
					value={organization.email}
					id='email' type='text' placeholder='Email' />
			</div>
			<div>
				<label htmlFor='phone'>Phone</label>
				<input
					name='phone'
					onChange={handleChange}
					value={organization.phone}
					id='phone' type='text' placeholder='Phone' />
			</div>
			<div>
				<label htmlFor='formOrganization'>Form Organization</label>
				<input
					name='formOrganization'
					onChange={handleChange}
					value={organization.formOrganization}
					id='formOrganization' type='text' placeholder='Form Organization' />
			</div>
			<div>
				<label htmlFor='character'>Character</label>
				<input
					name='character'
					onChange={handleChange}
					value={organization.character}
					id='character' type='text' placeholder='Character' />
			</div>
		</form>
	)
}

export default FormOrganization