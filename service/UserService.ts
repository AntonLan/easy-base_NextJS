import axios from 'axios'

class UserService {

	static getUserData = async (id: string | null, token: string | null) => {
		const path = `http://localhost:5002/api/users/${id}`
		const res = await axios(path,{ headers: {"Authorization" : `Bearer ${token}`}})
		return res.data
	}
}

export default UserService