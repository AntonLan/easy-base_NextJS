import { FC, useEffect } from 'react'
import ThemeService from '../service/ThemeService'
import { SunIcon } from '@heroicons/react/24/solid'
import { MoonIcon } from '@heroicons/react/24/solid'
import ModeStore from '../store/ModeStore'
import { inject } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'
import { observable } from 'mobx'

interface ToggleProps {
	modeStore?: ModeStore
}

const ToggleDarkMode: FC<ToggleProps> = ({modeStore}) => {

	useEffect(() => {
		ThemeService.checkTheme()
	}, [modeStore?.darkMode])

	return (
		<div className='inline-flex items-center p-[2px] rounded-3xl dark:bg-zinc-600'>
			<button
				className={`${
					!modeStore?.darkMode ? 'bg-white text-black' : ''
				} cursor-pointer rounded-3xl p-2`}
				onClick={() => modeStore?.switchMode()}
			>
				{!modeStore?.darkMode ? <SunIcon /> : <MoonIcon />}
			</button>
		</div>
	)

}

export default inject(InjectNames.ModeStore) (observable(ToggleDarkMode))
