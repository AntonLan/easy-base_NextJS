import React, { FC } from 'react'
import UserStore from '@/store/UserStore'
import { inject, observer } from 'mobx-react'
import InjectNames from '@/store/configuration/storeIdentifier'

interface CreateOrganizationModal {
	userStore?: UserStore
}

const CreateOrganizationModal: FC<CreateOrganizationModal> = ({ userStore }) => {


	return (
		<>
			{userStore?.isOpen &&
				<div onClick={userStore?.openModal} className='relative z-10' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
					<div className='fixed inset-0 z-10 overflow-y-auto'>
						<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
							<div onClick={e => e.stopPropagation()} className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
								<form className='px-8 pt-6 pb-8 mb-4'>
									<div className='mb-4'>
										<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
											Username
										</label>
										<input
											className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
											id='username' type='text' placeholder='Username' />
									</div>
									<div className='mb-6'>
										<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
											Password
										</label>
										<input
											className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
											id='password' type='password' placeholder='******************' />
									</div>
								</form>
								<div className='px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
									<button
										className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'>Create
									</button>
									<button
										onClick={userStore?.openModal}
										className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'>Cancel
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		</>
	)
}

export default inject(InjectNames.UserStore)(observer(CreateOrganizationModal))