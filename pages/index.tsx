import { Inter } from '@next/font/google'
import ToggleDarkMode from '@/components/ToggleDarkMode'
import MainLayout from '@/layout/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


	return (
		<MainLayout>
			<div className='bg-amber-400 dark:bg-black w-[200px] h-[200px]'>
				<ToggleDarkMode />
			</div>
		</MainLayout>
	)
}
