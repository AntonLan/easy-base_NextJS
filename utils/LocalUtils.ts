class LocalUtils {


	getUserId = () => {
		let id = localStorage.getItem('id')
		return id
	}

	getToken = () => {
		let token = localStorage.getItem('token')
		return token
	}


}

export default new LocalUtils()