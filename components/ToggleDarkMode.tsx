import { FC, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon } from '@heroicons/react/24/solid'
import { MoonIcon } from '@heroicons/react/24/solid'

const ToggleDarkMode: FC = () => {
	const { systemTheme, theme, setTheme } = useTheme()
	const [current, setCurrent] = useState('system')
	// @ts-ignore: error message
	const currentTheme = theme === 'system' ? systemTheme : theme

	useEffect(() => {
		if (theme === 'dark') setCurrent('dark')
		if (theme === 'light') setCurrent('light')
	}, [theme])


	return (
		<button
			onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}
			className='text-light-gray transition-all p-1 duration-100 rounded-full'>
			{current === 'light' ? <MoonIcon width={18} /> : <SunIcon width={18} />}
		</button>
	)

}

export default ToggleDarkMode
