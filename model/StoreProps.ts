import UserStore from '@/store/UserStore'
import AuthenticationStore from '@/store/AuthenticationStore'
import TableStore from '@/store/TableStore'

export interface StoreProps {
	userStore?: UserStore
	authenticationStore?: AuthenticationStore
	tableStore?: TableStore
}