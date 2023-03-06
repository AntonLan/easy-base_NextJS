import axios from 'axios'

class AuthenticationService {

	static singIn = async (email: string, password: string) => {
		const res = await axios.post('http://localhost:5002/api/auth/login',
			{
				email: email,
				password: password
			})
		return res.data
	}

	 static singUp = async (userName: string, email: string, password: string) => {
		const res = await axios.post('http://localhost:5002/api/auth/register', {
			userName: userName,
			email: email,
			password: password
		})
		return res.data
	}

	static singOut = () => {
		localStorage.clear()
	}
}

export default AuthenticationService