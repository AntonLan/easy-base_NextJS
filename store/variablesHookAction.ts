import useAuthenticationStore from '@/store/AuthenticationStore'

const VariablesHookAction = () => {
	const isAuth = useAuthenticationStore(s => s.isAuth)
}

export default VariablesHookAction