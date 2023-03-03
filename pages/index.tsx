import ToggleDarkMode from '@/components/ToggleDarkMode'
import MainLayout from '@/layout/MainLayout'
import useAuthenticationStore from '@/store/AuthenticationStore'
import { useRouter } from 'next/router'
import { useEffect, useLayoutEffect } from 'react'


export default function Home() {
	const isAuth = useAuthenticationStore(s => s.isAuth)
	const router = useRouter()


	useLayoutEffect(() => {
		checkAuth()
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
			</div>
		</MainLayout>
	)
}
