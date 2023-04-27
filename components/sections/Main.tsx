import { FC } from 'react'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import Table from '@/components/table/Table'
import { StoreProps } from '@/model/StoreProps'

const Main: FC<StoreProps> = ({ userStore, authenticationStore}) => {

	return (
		<>
			<Table />
		</>
	)
}

export default inject(InjectNames.UserStore, InjectNames.AuthenticationStore)(observer(Main))