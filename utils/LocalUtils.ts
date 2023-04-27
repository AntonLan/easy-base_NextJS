class LocalUtils {


	getUserId = () => {
		let id = localStorage.getItem('id')
		return id
	}

	getToken = () => {
		let token = localStorage.getItem('token')
		return token
	}

	getLocalData = () => {
		let id = localStorage.getItem('id')
		let token = localStorage.getItem('token')
		return { id, token }
	}

}

export default new LocalUtils()