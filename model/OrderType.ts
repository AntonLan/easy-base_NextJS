import { ProgressEnum } from '@/model/ProgressEnum'

export type OrderType = {
	_id?: string,
	progress?: ProgressEnum,
	client?: string,
	orderType?: string,
	createdAt?: string,
	updatedAt?: string,
}