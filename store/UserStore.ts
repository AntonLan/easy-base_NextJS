import { create } from 'zustand'
import UserService from '@/service/UserService'


interface UserState {
	user: any
	getUserData: (id: string | null, token: string | null) => void
}

const useUserStore = create<UserState>(set => ({
	user: {},
	getUserData: async (id: string | null, token: string | null) => {
		try {
			const res = await UserService.getUserData(id, token)
			set(() => ({ user: res }))
		} catch (e) {
			console.log(e)
		}
	}
}))

export default useUserStore
