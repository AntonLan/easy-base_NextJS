import { ColorModeEnum } from '@/model/ColorModeEnum'
import { makeObservable, observable } from 'mobx'

class ModeStore {
	darkMode: boolean = false
	constructor() {
		makeObservable(this, {
			darkMode: observable,
		})
	}

	switchMode = () => {
			this.darkMode = !this.darkMode
		if (this.darkMode) {
			localStorage.theme = ColorModeEnum.LIGHT
		} else {
			localStorage.theme = ColorModeEnum.DARK
		}
	}
}

export default ModeStore
