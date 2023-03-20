import UserService from '@/service/UserService'
import { makeObservable, observable, runInAction } from 'mobx'
import { UserType } from '@/model/UserType'
import { OrganizationType } from '@/model/OrganizationType'
import { OrderType } from '@/model/OrderType'
import { ModalMode } from '@/model/ModalMode'


class UserStore {
	user: UserType = {}
	modalMode: ModalMode = ModalMode.CREATE_ORDER
	organization: OrganizationType = {}
	order: OrderType = {}
	isOpen: boolean = false

	constructor() {
		makeObservable(this, {
			user: observable,
			modalMode: observable,
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
		this.order = { ...this.order, [event?.target.name]: event?.target.value }
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

	createOrder = async () => {
		const reqBody = {
			...this.order,
			userId: this.user._id
		}
		try {
			const res = await UserService.createOrder(reqBody)
			runInAction(() => {
				this.user.orders?.push(res)
				this.isOpen = !this.isOpen
				this.order = {}
			})
		} catch (e) {
			console.log(e)
		}
	}

	changeMode = (mode: ModalMode) => {
		runInAction(() => {
			this.modalMode = mode
		})
	}

	openModal = () => {
		runInAction(() => {
			this.isOpen = !this.isOpen
			this.order = {}
			this.organization = {}
		})
	}

}

export default UserStore
