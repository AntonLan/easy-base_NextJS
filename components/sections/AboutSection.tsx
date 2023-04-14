import { FC } from 'react'

const AboutSection: FC = () => {
	return (
		<div className='w-full h-[calc(100vh-111px)]'>
			<h1 className='text-center mt-[10%] font-medium text-3xl'>About</h1>
			<div className='w-[600px] mx-auto mt-3'>
				<p>This application is currently under development. Thanks to all my
					inspirations and those who constantly support me. Gradually,
					new functionality and features will be introduced into the application.
				</p>
				<p className='mt-2.5'>Email: lanqel@gmail.com</p>
			</div>
		</div>
	)
}

export default AboutSection