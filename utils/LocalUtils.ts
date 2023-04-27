class LocalUtils {

	getToken = () => {
		return localStorage.getItem('token')
	}

	getLocalData = () => {
		let id = localStorage.getItem('id')
		let token = localStorage.getItem('token')
		return { id, token }
	}

}

export default new LocalUtils()