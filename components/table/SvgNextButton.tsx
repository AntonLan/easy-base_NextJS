import { FC } from 'react'

interface SvgButtonProps {
	title: string
	handleClick?: () => void
}

const SvgNextButton: FC<SvgButtonProps> = ({ handleClick, title }) => {
	return (
		<button onClick={handleClick}>
			{title === 'Next' ?
				<>
					<p>{title}</p>
					<svg width={14} height={8} viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M1.1665 4H12.8332' stroke='currentColor' strokeWidth='1.25' strokeLinecap='round'
									strokeLinejoin='round' />
						<path d='M9.5 7.33333L12.8333 4' stroke='currentColor' strokeWidth='1.25' strokeLinecap='round'
									strokeLinejoin='round' />
						<path d='M9.5 0.666687L12.8333 4.00002' stroke='currentColor' strokeWidth='1.25' strokeLinecap='round'
									strokeLinejoin='round' />
					</svg>
				</>
				:
				<>
					<svg width={14} height={8} viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M1.1665 4H12.8332' stroke='currentColor' strokeWidth='1.25' strokeLinecap='round'
									strokeLinejoin='round' />
						<path d='M1.1665 4L4.49984 7.33333' stroke='currentColor' strokeWidth='1.25' strokeLinecap='round'
									strokeLinejoin='round' />
						<path d='M1.1665 4.00002L4.49984 0.666687' stroke='currentColor' strokeWidth='1.25' strokeLinecap='round'
									strokeLinejoin='round' />
					</svg>
					<p>{title}</p>
				</>
			}
		</button>
	)
}

export default SvgNextButton