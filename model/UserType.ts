import { OrganizationType } from '@/model/OrganizationType'
import { OrderType } from '@/model/OrderType'

export type UserType = {
	id?: string,
	userName?: string,
	email?: string,
	organizations?: OrganizationType[],
	orders?: OrderType[],
	createdAt?: string,
	updatedAt?: string,
}