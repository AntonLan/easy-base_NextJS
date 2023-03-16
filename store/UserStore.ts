import UserService from '@/service/UserService'
import { makeObservable, observable, runInAction } from 'mobx'
import { UserType } from '@/model/UserType'
import { OrganizationType } from '@/model/OrganizationType'


class UserStore {
	user: UserType = {}
	organization: OrganizationType = {}
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

	changeOrganizationHandler = (event: any) => {
		this.organization = { ...this.organization, [event?.target.name]: event?.target.value }
	}

	createOrganization = async () => {
		const reqBody = {
			...this.organization,
			userId: this.user._id
		}
		try {
			const res = await UserService.createOrganization(reqBody)
			runInAction(() => {
				this.user.organizations?.push(res)
				this.isOpen = !this.isOpen
				this.organization = {}
			})

		} catch (e) {
			console.log(e)
		}


	}

	openModal = () => {
		runInAction(() => {
			this.isOpen = !this.isOpen
			this.organization = {}
		})
	}

}

export default UserStore
