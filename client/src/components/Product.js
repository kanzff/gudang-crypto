import React from 'react'

const Product = () => {
  return (
    <div className="w-72 h-86 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="w-60 p-8 rounded-t-lg" src="https://m.media-amazon.com/images/I/61S6hE2xBuL._SL1480_.jpg" alt="product image" />
        </a>
        <div className="px-5 pb-5">
            <div className="flex items-center justify-between">
                <span className="text-l font-bold text-black-600 dark:text-white">Exodia</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-l font-bold text-blue-600 dark:text-white">IDR 450000</span>
            </div>
        </div>
    </div>
  )
}

export default Product