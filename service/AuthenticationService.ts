import axios from 'axios'

const AuthenticationService = {


	singIn: async (email: string, password: string) => {
		const res = await axios.post('http://localhost:5002/api/auth/login',
			{
				email: email,
				password: password
			})
		return res.data
	},


	singUp: async (userName: string, email: string, password: string) => {
		const res = await axios.post('http://localhost:5002/api/auth/register', {
			userName: userName,
			email: email,
			password: password
		})
		return res.data
	},

	singOut: () => {
		localStorage.clear()
	}

}

export default AuthenticationService