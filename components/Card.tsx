import { FC } from 'react'
import { OrganizationType } from '@/model/OrganizationType'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import style from '@/styles/Card.module.scss'
import { ModalMode } from '@/model/ModalMode'
import { StoreProps } from '@/model/StoreProps'

interface CardProps extends StoreProps {
	organization: OrganizationType
}

const Card: FC<CardProps> = ({ organization, userStore }) => {

	const handleCard = () => {
		userStore?.changeMode(ModalMode.UPDATE_ORGANIZATION)
		userStore?.openUpdateModal(organization)
	}

	return (
		<div onClick={handleCard}
				 className={style.cardWrapper}>
			<h1>{organization.name}</h1>
			<p>{organization.formOrganization}</p>
			<p>{organization.email}</p>
			<p>{organization.phone}</p>
			<p>{organization.character}</p>
		</div>
	)
}

export default inject(InjectNames.UserStore)(observer(Card))