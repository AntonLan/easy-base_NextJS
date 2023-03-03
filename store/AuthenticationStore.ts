import { create } from 'zustand'
import { ChangeEvent } from 'react'
import AuthenticationService from '@/service/AuthenticationService'

interface AuthenticationState {
	userName: string
	password: string
	email: string
	isLoading: boolean
	isAuth: boolean
	error: string
	changeEmail: (e: ChangeEvent<HTMLInputElement>) => void
	changePassword: (e: ChangeEvent<HTMLInputElement>) => void
	changeUserName: (e: ChangeEvent<HTMLInputElement>) => void
	singIn: (email: string, password: string) => void
	singUp: (userName: string, email: string, password: string) => void

}

const useAuthenticationStore = create<AuthenticationState>(set => ({
	userName: '',
	password: '',
	email: '',
	isAuth: false,
	isLoading: false,
	error: '',
	changeEmail: (e) => {
		set(() => ({ email: e.target.value }))
	},
	changePassword: (e) => {
		set(() => ({ password: e.target.value }))
	},
	changeUserName: (e) => {
		set(() => ({ userName: e.target.value }))
	},
	singIn: async (email: string, password: string) => {
		if (email.length === 0 || password.length === 0) return
		try {
			set(() => ({ isLoading: true, error: '' }))
			const res = await AuthenticationService.singIn(email, password)
			localStorage.setItem('id', res.user._id)
			localStorage.setItem('token', res.accessToken)
			set(() => ({
				password: '',
				email: '',
				isAuth: true,
				isLoading: false
			}))
		} catch (e: any) {
			set(() => ({
				password: '',
				email: '',
				error: e.message,
				isAuth: false,
				isLoading: false
			}))
		}
	},
	singUp: async (userName: string, email: string, password: string) => {
		if (email.length === 0 || password.length === 0 || userName.length === 0) return
		try {
			set(() => ({ isLoading: true, error: '' }))
			const res = await AuthenticationService.singUp(userName, email, password)
			localStorage.setItem('id', res.user._id)
			localStorage.setItem('token', res.accessToken)
			set(() => ({
				userName: '',
				password: '',
				email: '',
				isLoading: false
			}))
		} catch (e: any) {
			set(() => ({
				userName: '',
				password: '',
				email: '',
				error: e.message,
				isLoading: false
			}))
		}
	}
}))

export default useAuthenticationStore
