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
	isOpenCreateModal: boolean = false
	isOpenDeleteModal: boolean = false

	constructor() {
		makeObservable(this, {
			user: observable,
			order: observable,
			modalMode: observable,
			isOpenCreateModal: observable,
			isOpenDeleteModal: observable
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

	changeHandler = (event: any) => {
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
				this.isOpenCreateModal = !this.isOpenCreateModal
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
				this.isOpenCreateModal = !this.isOpenCreateModal
				this.order = {}
			})
		} catch (e) {
			console.log(e)
		}
	}

	updateOrder = async (order: OrderType) => {
		const reqBody = {
			...order,
			...this.order,
			id: order?._id,
			userId: this.user._id
		}
		let { id, userId, ...newOrder } = reqBody
		let index = this.user.orders?.indexOf(order)
		try {
			const res = await UserService.updateOrder(reqBody)
			runInAction(() => {
				this.order = {}
				this.user.orders?.splice(index!, 1, newOrder)
			})
		} catch (e) {
			console.log(e)
		}
	}


	deleteOrder = async (order: OrderType) => {
		const reqBody = {
			...order,
			id: this.order?._id,
			userId: this.user._id
		}
		let index = this.user.orders?.indexOf(order)
		try {
			const res = await UserService.deleteOrder(reqBody)
			runInAction(() => {
				this.user.orders?.splice(index!, 1)
				this.isOpenDeleteModal = !this.isOpenDeleteModal
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
			this.isOpenCreateModal = !this.isOpenCreateModal
			this.order = {}
			this.organization = {}
		})
	}

	openDeleteModal = () => {
		runInAction(() => {
			this.isOpenDeleteModal = !this.isOpenDeleteModal
		})
	}

}

export default UserStore
