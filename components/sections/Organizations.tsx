import { FC } from 'react'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import Card from '@/components/Card'
import style from '@/styles/Organizations.module.scss'
import { StoreProps } from '@/model/StoreProps'

const Organizations: FC<StoreProps> = ({ userStore }) => {

	return (
		<div className={style.cardContainer}>
			{userStore?.user.organizations?.map(o => (
				<Card key={o._id} organization={o}/>
			))}
		</div>
	)
}

export default inject(InjectNames.UserStore)(observer(Organizations))