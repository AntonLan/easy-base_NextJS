import axios from 'axios'
import { UserType } from '@/model/UserType'
import { OrganizationType } from '@/model/OrganizationType'
import { OrderType } from '@/model/OrderType'

class UserService {

	static getUserData = async (id: string | null, token: string | null) => {
		const path = `http://localhost:5002/api/users/${id}`
		const res = await axios<UserType>(path,{ headers: {"Authorization" : `Bearer ${token}`}})
		return res.data
	}

	static createOrganization = async (organization: OrganizationType) => {
		const path = 'http://localhost:5002/api/users/organizations'
		const res = await axios.post(path, {...organization, Headers: 'application/json'})
		return res.data
	}

	static createOrder = async (order: OrderType) => {
		const path = 'http://localhost:5002/api/users/orders'
		const res = await axios.post(path, {...order, Headers: 'application/json'})
		return res.data
	}

	static updateOrder = async (order: OrderType) => {
		const path = 'http://localhost:5002/api/users/orders'
		const res = await axios.put(path, {...order, Headers: 'application/json'})
		return res.data
	}

	static deleteOrder = async (order: OrderType) => {
		const path = 'http://localhost:5002/api/users/orders'
		const res = await axios.delete(path, { data: { ...order } })
		return res.data
	}

}

export default UserService