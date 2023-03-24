import { FC } from 'react'
import { OrganizationType } from '@/model/OrganizationType'
import UserStore from '@/store/UserStore'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'

interface CardProps {
	organization: OrganizationType
	userStore?: UserStore
}

const Card: FC<CardProps> = ({organization, userStore}) => {

	const handleCard = () => {
		userStore?.openUpdateModal(organization)
	}

	return (
			<div onClick={handleCard}
				className="block cursor-pointer w-[200px] h-[200px] m-2.5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
				<h5 className="mb-2 font-bold tracking-tight text-main dark:text-white">{organization.name}</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400">{organization.formOrganization}</p>
				<p className="font-normal text-gray-700 dark:text-gray-400">{organization.character}</p>
			</div>
	)
}

export default inject(InjectNames.UserStore)(observer(Card))