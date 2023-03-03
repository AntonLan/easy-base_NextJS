import ToggleDarkMode from '@/components/ToggleDarkMode'
import MainLayout from '@/layout/MainLayout'
import useAuthenticationStore from '@/store/AuthenticationStore'
import { useRouter } from 'next/router'
import { useLayoutEffect } from 'react'
import useUserStore from '@/store/UserStore'


export default function Home() {
	const isAuth = useAuthenticationStore(s => s.isAuth)
	const singOut = useAuthenticationStore(s => s.singOut)
	const user = useUserStore(s => s.user)
	const getUserData = useUserStore(s => s.getUserData)
	const router = useRouter()


	useLayoutEffect(() => {
		checkAuth()
		const id = localStorage.getItem('id')
		const token = localStorage.getItem('token')
		if (id && token) {
			getUserData(id, token)
		}
	}, [isAuth])

	const checkAuth = () => {
		let token = localStorage.getItem('token')
		if (!token) {
			router.push('/login')
		}
	}

	return (
		<MainLayout>
			<div className='bg-amber-400 dark:bg-black w-[200px] h-[200px]'>
				<ToggleDarkMode />
				<button onClick={singOut}>sing out</button>
			</div>
		</MainLayout>
	)
}


