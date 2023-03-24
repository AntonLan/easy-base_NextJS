import React, { FC, ReactNode } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import CreateModal from '@/components/modal/CreateModal'
import DeleteModal from '@/components/modal/DeleteModal'
import UpdateModal from '@/components/modal/UpdateModal'


interface MainLayoutProps {
	children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Easy Base</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<main>
				<Header/>
				<div className='main-container'>
					<SideBar />
					{children}
				</div>
				<CreateModal/>
				<DeleteModal />
				<UpdateModal />
			</main>
		</>
	)
}

export default MainLayout