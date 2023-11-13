import React, { useState } from 'react'

const Dashboard = () => {

    const [currentTab, setCurrentTab] = useState('dashboard')
    
    
    return (
        <>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"></img>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Perfey</span>
                    </a>
                    <div className="flex ">
                        <div className='text-right mx-4 font-medium'>
                            <p className='text-blue-600'>Halo Admin</p>
                            <p>Aden S. Putra</p>
                        </div>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">O</button>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-24 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href='#' className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${currentTab === 'dashboard' ? 'bg-blue-500 text-white' : ''}`}
                            onClick={()=> setCurrentTab('dashboard')}
                        >
                            <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                            </svg>
                            <span className="ms-3">Dashboard</span>
                        </a>
                    </li>
                    
                    <li>
                        <a href='#' className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${currentTab === 'user' ? 'bg-blue-500 text-white' : ''}`}
                            onClick={()=> setCurrentTab('user')}
                        >
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Manajemen User</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${currentTab === 'product' ? 'bg-blue-500 text-white' : ''}`}
                                onClick={()=> setCurrentTab('product')}
                        >
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Manajemen Produk</span>
                        </a>
                    </li>
                    
                </ul>
            </div>
            </aside>
            { currentTab === 'dashboard' &&
                <div className="px-12 py-10 sm:ml-64 mt-20 h-full bg-slate-100">
                    <p className='font-medium text-xl'>Dashboard</p>
                    <div className='flex justify-between my-10 font-medium'>
                        <div className="w-72 max-w-sm p-6 bg-blue-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <p className='text-slate-400'>Jumlah User</p>
                            <p className='text-xl'>150 User</p>
                        </div>
                        <div className="w-72 max-w-sm p-6 bg-blue-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <p className='text-slate-400'>Jumlah User</p>
                            <p className='text-xl'>150 User</p>
                        </div>
                        <div className="w-72 max-w-sm p-6 bg-blue-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <p className='text-slate-400'>Jumlah User</p>
                            <p className='text-xl'>150 User</p>
                        </div>
                        <div className="w-72 max-w-sm p-6 bg-blue-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <p className='text-slate-400'>Jumlah User</p>
                            <p className='text-xl'>150 User</p>
                        </div>
                    </div>
                    <div className='bg-white border rounded-lg shadow max-w-4xl p-6 font-medium'>
                        <p>Produk Terbaru</p>
                        <div className='my-4 p-2 flex justify-between border rounded-lg bg-blue-500 text-white'>
                            <p>Produk</p>
                            <p>Tanggal dibuat</p>
                            <p>Harga (Rp)</p>
                        </div>
                        <div>
                            {/* product list */}
                            <div className='my-4 p-2 flex justify-between items-center'>
                                <div className='flex justify-start items-center'>
                                    <img className="w-24 pr-4  rounded-t-lg" src="https://m.media-amazon.com/images/I/61S6hE2xBuL._SL1480_.jpg" alt="product image" />    
                                    <p>Microsoft Surface</p>
                                </div>
                                <p>12 May 2023</p>
                                <p>Rp. 400000</p>
                            </div>
                            <div className='my-4 p-2 flex justify-between items-center'>
                                <div className='flex justify-start items-center'>
                                    <img className="w-24 pr-4  rounded-t-lg" src="https://m.media-amazon.com/images/I/61S6hE2xBuL._SL1480_.jpg" alt="product image" />    
                                    <p>Microsoft Surface</p>
                                </div>
                                <p>12 May 2023</p>
                                <p>Rp. 400000</p>
                            </div>
                            <div className='my-4 p-2 flex justify-between items-center'>
                                <div className='flex justify-start items-center'>
                                    <img className="w-24 pr-4  rounded-t-lg" src="https://m.media-amazon.com/images/I/61S6hE2xBuL._SL1480_.jpg" alt="product image" />    
                                    <p>Microsoft Surface</p>
                                </div>
                                <p>12 May 2023</p>
                                <p>Rp. 400000</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
            { currentTab === 'user' &&
                <div className="px-12 py-10 sm:ml-64 mt-20 h-full bg-slate-100">
                    <div className='flex justify-between'>
                        <p className='font-medium text-xl'>Manajemen User</p>
                        <button type='button' className='font-medium text-xl bg-blue-600 py-2 px-6 rounded-lg text-white'>TAMBAH USER</button>
                    </div>
                   
                    <div className='bg-white border rounded-lg shadow p-6 font-medium my-6'>
                        <div className='my-4 p-2 flex justify-between gap-58 border rounded-lg bg-blue-500 text-white'>
                            <p>No</p>
                            <p>Email</p>
                            <p>Nama Lengkap</p>
                            <p>No. Telepon</p>
                            <p>Status</p>
                            <p className='text-blue-500'>Action</p>
                        </div>
                        <div>
                            {/* user list */}
                            <div className='my-4 p-2 flex justify-start gap-56 items-center'>
                                <p>1</p>
                                <p>Aden S. Putra</p>
                                <p>aden@gmail.com</p>
                                <p>0812344345</p>
                                <p>Aktiv</p>
                            </div>
                            <div className='my-4 p-2 flex justify-start gap-56 items-center'>
                                <p>1</p>
                                <p>Aden S. Putra</p>
                                <p>aden@gmail.com</p>
                                <p>0812344345</p>
                                <p>Aktiv</p>
                            </div>
                            <div className='my-4 p-2 flex justify-start gap-56 items-center'>
                                <p>1</p>
                                <p>Aden S. Putra</p>
                                <p>aden@gmail.com</p>
                                <p>0812344345</p>
                                <p>Aktiv</p>
                            </div>
                            <div className='my-4 p-2 flex justify-start gap-56 items-center'>
                                <p>1</p>
                                <p>Aden S. Putra</p>
                                <p>aden@gmail.com</p>
                                <p>0812344345</p>
                                <p>Aktiv</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Dashboard