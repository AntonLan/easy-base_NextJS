import { FC } from 'react'
import { svgUtils } from '@/utils/svgUtils'

const SvgSort: FC = () => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg'
				 fill='currentColor'
				 viewBox='0 0 320 512'>
			<path d={svgUtils.sortSvgPath} />
		</svg>
	)
}

export default SvgSort