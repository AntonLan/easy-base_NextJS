import UserService from '@/service/UserService'
import { makeObservable, observable, runInAction } from 'mobx'
import { UserType } from '@/model/UserType'
import { OrganizationType } from '@/model/OrganizationType'
import { OrderType } from '@/model/OrderType'
import { ModalMode } from '@/model/ModalMode'
import Utils from '@/utils/Utils'
import { ChangeEvent } from 'react'


class UserStore {
	user: UserType = {}
	modalMode: ModalMode = ModalMode.CREATE_ORDER
	organization: OrganizationType = {}
	order: OrderType = {}
	error: string = ''
	isOpenCreateModal: boolean = false
	isOpenDeleteModal: boolean = false
	isOpenUpdateModal: boolean = false
	isUserDropMenu: boolean = false

	constructor() {
		makeObservable(this, {
			user: observable,
			order: observable,
			organization: observable,
			modalMode: observable,
			error: observable,
			isOpenCreateModal: observable,
			isOpenDeleteModal: observable,
			isOpenUpdateModal: observable,
			isUserDropMenu: observable
		})
	}


	getUserData = async (id: string | null, token: string | null) => {
		try {
			const res = await UserService.getUserData(id, token)
			runInAction(() => {
				this.user = res
				this.error = ''
			})
		} catch (e: any) {
			runInAction(() => {
				this.error = this.error = e.request.statusText
			})
		}
	}


	changeHandler = (event: ChangeEvent<HTMLInputElement>) : void => {
		runInAction(() => {
			this.organization = { ...this.organization, [event?.target.name]: event?.target.value }
			this.order = { ...this.order, [event?.target.name]: event?.target.value }
		})
	}

	createOrganization = async () => {
		if (!this.organization?.name
			|| !this.organization?.formOrganization
			|| !this.organization?.email
			|| !this.organization?.phone
			|| !this.organization?.character
		) {
			runInAction(() => {
				this.error = 'Please make sure all fields are filled in correctly'
			})
			return
		}


		const reqBody = {
			...this.organization,
			userId: this.user._id
		}
		try {
			const res = await UserService.createOrganization(reqBody)
			runInAction(() => {
				this.error = ''
				this.user.organizations?.push(res)
				this.isOpenCreateModal = !this.isOpenCreateModal
				this.organization = {}
			})
		} catch (e: any) {
			runInAction(() => {
				this.error = this.error = e.request.statusText
			})
		}
	}


	updateOrganization = async (organization: OrganizationType) => {
		const reqBody = {
			...organization,
			...this.organization,
			id: organization?._id,
			userId: this.user._id
		}
		let { id, userId, ...newOrganization } = reqBody
		let index = this.user.organizations?.indexOf(organization)
		try {
			await UserService.updateOrganization(reqBody)
			runInAction(() => {
				this.organization = {}
				this.error = ''
				this.isOpenUpdateModal = !this.isOpenUpdateModal
				this.user.organizations?.splice(index!, 1, newOrganization)
			})
		} catch (e: any) {
			runInAction(() => {
				this.error = this.error = e.request.statusText
			})
		}
	}


	createOrder = async () => {
		if (!this.order?.client || !this.order?.orderType) {
			runInAction(() => {
				this.error = 'Please make sure all fields are filled in correctly'
			})
			return
		}

		const reqBody = {
			...this.order,
			userId: this.user._id
		}
		try {
			const res = await UserService.createOrder(reqBody)
			runInAction(() => {
				this.error = ''
				this.user.orders?.push({ ...res, isSelected: false })
				this.isOpenCreateModal = !this.isOpenCreateModal
				this.order = {}
			})
		} catch (e: any) {
			runInAction(() => {
				this.error = this.error = e.request.statusText
			})
		}
	}

	updateOrder = async (order: OrderType) => {
		runInAction(() => {
			this.user.orders?.map(order => order.isSelected = false)
		})
		const reqBody = {
			...order,
			...this.order,
			id: order?._id,
			userId: this.user._id
		}
		let { id, userId, ...newOrder } = reqBody
		let index = this.user.orders?.indexOf(order)
		try {
			await UserService.updateOrder(reqBody)
			runInAction(() => {
				this.error = ''
				this.order = {}
				this.user.orders?.splice(index!, 1, newOrder)
			})
		} catch (e: any) {
			runInAction(() => {
				this.error = this.error = e.request.statusText
			})
		}
	}


	deleteOrder = async () => {
		const reqBody = {
			...this.order,
			id: this.order?._id,
			userId: this.user._id
		}
		let index = this.user.orders?.indexOf(this.order)
		try {
			await UserService.deleteOrder(reqBody)
			runInAction(() => {
				this.error = ''
				this.user.orders?.splice(index!, 1)
				this.isOpenDeleteModal = !this.isOpenDeleteModal
			})
		} catch (e: any) {
			runInAction(() => {
				this.error = e.request.statusText
			})
		}
	}

	changeMode = (mode: ModalMode) => {
		runInAction(() => {
			this.modalMode = mode
		})
	}

	openModal = () => {
		runInAction(() => {
			this.isOpenCreateModal = true
			this.order = {}
			this.organization = {}
		})
	}

	openDeleteModal = (order: OrderType) => {
		runInAction(() => {
			this.order = order
			this.isOpenDeleteModal = true
		})
	}

	openUpdateModal = (organization: OrganizationType) => {
		runInAction(() => {
			this.organization = organization
			this.isOpenUpdateModal = true
		})
	}

	openUserMenu = () => {
		runInAction(() => {
			this.isUserDropMenu = !this.isUserDropMenu
		})
	}


	sortUser = (sortedBy: keyof OrderType) => {
		runInAction(() => {
			if (this.user)
				this.user.orders = Utils.sortArrayOfObjects(this.user?.orders!, sortedBy, 'ascending')
			})
		}


	handleOpen = (id?: string) => {
		runInAction(() => {
			this.user.orders?.map(order => {
				order.isSelected = order._id === id
			})
		})
	}

	handleClose = () => {
		runInAction(() => {
			this.isOpenCreateModal = false
			this.isOpenDeleteModal = false
			this.isOpenUpdateModal = false
			this.isUserDropMenu = false
			this.user.orders?.map(order => order.isSelected = false)
			this.order = {}
			this.organization = {}
			this.error = ''
		})
	}

}

export default UserStore
