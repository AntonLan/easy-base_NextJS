import UserService from '@/service/UserService'
import { makeObservable, observable, runInAction } from 'mobx'
import { UserType } from '@/model/UserType'


class UserStore {
	user: UserType = {}
	isOpen: boolean = false

	constructor() {
		makeObservable(this, {
			user: observable,
			isOpen: observable
		})
	}


	getUserData = async (id: string | null, token: string | null) => {
		try {
			const res = await UserService.getUserData(id, token)
			runInAction(() => {
				this.user = res
			})
		} catch (e) {
			console.log(e)
		}
	}

	openModal = () => {
		runInAction(() => {
			this.isOpen = !this.isOpen
		})
	}

}

export default UserStore
