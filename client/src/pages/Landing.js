import React from 'react'

import Navbar from '../components/Navbar'
import Product from '../components/Product'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <>
        <Navbar></Navbar>
        {/* product list */}
        <div className='mt-32 max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <div className='newest-newest-product'>
                <h1 className='font-bold text-2xl text-left ml-10'>Terbaru</h1>
                <div className='flex my-4'>
                    <button type='button'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg></button>
                    <div className='flex mx-4 w-full'>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                    <button type='button'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg></button>
                </div>
            </div>
            <div className='available-product'>
                <h1 className='font-bold text-2xl text-left ml-10'>Produk Tersedia</h1>
                <div className='flex my-4 ml-6'>
                    <div className='flex flex-wrap mx-4 w-full'>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                </div>
                <button type="button" className="m-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lihat lebih banyak</button>
            </div>
        </div>
        {/* footer */}
        <Footer></Footer>
    </>
  )
}

export default Landing