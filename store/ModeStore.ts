import { create } from 'zustand'
import { ColorModeEnum } from '@/model/ColorModeEnum'

interface ModeState {
	darkMode: boolean
	switchMode: (mode: boolean) => void
}

const useModeStore = create<ModeState>(set => ({
	darkMode: false,
	switchMode: darkMode => {set(state => ({
			darkMode: !state.darkMode
		}))
		if (darkMode) {
			localStorage.theme = ColorModeEnum.LIGHT
		} else {
			localStorage.theme = ColorModeEnum.DARK
		}
	}
}))

export default useModeStore
