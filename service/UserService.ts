import axios from 'axios'
import { UserType } from '@/model/UserType'

class UserService {

	static getUserData = async (id: string | null, token: string | null) => {
		const path = `http://localhost:5002/api/users/${id}`
		const res = await axios<UserType>(path,{ headers: {"Authorization" : `Bearer ${token}`}})
		return res.data
	}
}

export default UserService