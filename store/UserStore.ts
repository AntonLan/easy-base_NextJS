import UserService from '@/service/UserService'
import { makeObservable, observable } from 'mobx'


class UserStore {
	user = {}

	constructor() {
		makeObservable(this, {
			user: observable,
		})
	}


	getUserData = async (id: string | null, token: string | null) => {
		try {
			const res = await UserService.getUserData(id, token)
			 this.user = res
		} catch (e) {
			console.log(e)
		}
	}
}

export default UserStore
