import { FC, useEffect } from 'react'
import useModeStore from '../store/ModeStore'
import ThemeService from '../service/ThemeService'
import { SunIcon } from '@heroicons/react/24/solid'
import { MoonIcon } from '@heroicons/react/24/solid'

const ToggleDarkMode: FC = () => {
	const darkMode = useModeStore(state => state.darkMode)
	const switchMode = useModeStore(state => state.switchMode)

	useEffect(() => {
		ThemeService.checkTheme()
	}, [darkMode])

	return (
		<div className='inline-flex items-center p-[2px] rounded-3xl dark:bg-zinc-600'>
			<button
				className={`${
					!darkMode ? 'bg-white text-black' : ''
				} cursor-pointer rounded-3xl p-2`}
				onClick={() => switchMode(darkMode!)}
			>
				{!darkMode ? <SunIcon /> : <MoonIcon />}
			</button>
		</div>
	)

}

export default ToggleDarkMode
