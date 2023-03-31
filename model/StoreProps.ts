import UserStore from '@/store/UserStore'
import AuthenticationStore from '@/store/AuthenticationStore'

export interface StoreProps {
	userStore?: UserStore
	authenticationStore?: AuthenticationStore
}