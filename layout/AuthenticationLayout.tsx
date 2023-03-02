import { FC, ReactNode } from 'react'
import Head from 'next/head'

interface AuthenticationProps {
	children: ReactNode
}

const AuthenticationLayout: FC<AuthenticationProps> = ({children}) => {
	return (
		<>
			<Head>
				<title>Authentication</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<main>
				{children}
			</main>
		</>
	)
}

export default AuthenticationLayout