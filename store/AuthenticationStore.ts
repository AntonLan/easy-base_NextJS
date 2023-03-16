import AuthenticationService from '@/service/AuthenticationService'
import { makeObservable, observable, runInAction } from 'mobx'
import { ChangeEvent } from 'react'

class AuthenticationStore {
	userName: string = ''
	password: string = ''
	email: string = ''
	isAuth?: boolean = undefined
	isLoading: boolean = false
	error: string = ''


	constructor() {
		makeObservable(this, {
			userName: observable,
			password: observable,
			email: observable,
			isAuth: observable,
			isLoading: observable,
			error: observable
		})
	}

	changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
		runInAction(() => {
			this.email = e.target.value.toLowerCase()
		})
	}

	changePassword = (e: ChangeEvent<HTMLInputElement>) => {
		runInAction(() => {
			this.password = e.target.value
		})
	}

	changeUserName = (e: ChangeEvent<HTMLInputElement>) => {
		runInAction(() => {
			this.userName = e.target.value
		})
	}

	singIn = async () => {
		if (this.email.length === 0 || this.password.length === 0) return
		try {
			runInAction(() => {
				this.isLoading = true
				this.error = ''
			})
			const res = await AuthenticationService.singIn(this.email, this.password)
			localStorage.setItem('id', res.user._id)
			localStorage.setItem('token', res.accessToken)
			runInAction(() => {
				this.password = ''
				this.email = ''
				this.isAuth = true
				this.isLoading = false
			})
		} catch (e: any) {
			runInAction(() => {
				this.password = ''
				this.email = ''
				this.error = e.message
				this.isAuth = false
				this.isLoading = false
			})
		}
	}

	singUp = async () => {
		if (this.email.length === 0 || this.password.length === 0 || this.userName.length === 0) return
		try {
			runInAction(() => {
				this.isLoading = true
				this.error = ''
			})
			const res = await AuthenticationService.singUp(this.userName, this.email, this.password)
			localStorage.setItem('id', res.user._id)
			localStorage.setItem('token', res.accessToken)
			runInAction(() => {
				this.userName = ''
				this.password = ''
				this.email = ''
				this.isLoading = false
			})
		} catch (e: any) {
			runInAction(() => {
				this.userName = ''
				this.password = ''
				this.email = ''
				this.error = e.message
				this.isLoading = false
			})

		}
	}

	singOut = () => {
		runInAction(() => {
			this.isAuth = false
		})
		localStorage.clear()
	}
}

export default AuthenticationStore

