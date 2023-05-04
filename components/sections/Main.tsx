import { FC } from 'react'
import Table from '@/components/table/Table'
import { useFetching } from '@/components/hooks/useFetching'


const Main: FC = () => {
	useFetching()

	return (
		<>
			<Table />
		</>
	)
}

export default Main