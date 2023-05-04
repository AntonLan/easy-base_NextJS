import LocalUtils from '@/utils/LocalUtils'
import { stores } from '@/store/configuration/storeInitializer'
import { useEffect } from 'react'

export const useFetching = () => {
	const { userStore } = stores


	useEffect(() => {
		getData()
	}, [])


	const getData = () => {
		let { id, token } = LocalUtils.getLocalData()
		if (id && token) {
			userStore?.getUserData(id, token)
		}
	}

	return {getData}
}

