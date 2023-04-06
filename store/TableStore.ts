import { action, makeObservable, observable, runInAction } from 'mobx'
import { number } from 'prop-types'
import { OrderType } from '@/model/OrderType'

class TableStore {

	currentPage: number = 1
	limit: number = 5


	constructor() {
		makeObservable(this, {
			currentPage: observable,
			limit: observable,
			getPages: action
		})
	}


	changePage = (page: number) => {
		runInAction(() => {
			this.currentPage = page
		})
	}

	getPages = (countsRow: number | undefined) => {
		let totalPages
		let result: Array<number> = []
		if (countsRow) totalPages = Math.ceil(countsRow / this.limit)
		if (totalPages) {
			for (let i = 0; i < totalPages; i++) {
				runInAction(() => {
					result.push(i + 1)
				})
			}
		}
		return result
	}

	getActualOrders = (orders: OrderType[] | undefined) => {
		let result: OrderType[] = []
		let startIndex = (this.currentPage - 1) * this.limit
		if (orders)
		for (let i = 0; i < this.limit; i++) {
			if (orders[startIndex]) result.push(orders[startIndex])
			startIndex += 1
		}
		return result
	}

}

export default TableStore