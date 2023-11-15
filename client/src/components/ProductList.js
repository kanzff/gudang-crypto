import React from 'react'

const ProductList = ({product}) => {
    return (
        <>
            <div className='my-4 p-2 flex justify-start items-center'>
                <p className='w-12 text-center'>{product.id}</p>
                <div className='w-[40rem] flex justify-center items-center'>
                    <img className="w-28" src={product.image} alt="product image" />
                    <p className='w-80 p-12'>{product.name}</p>
                </div>
                <p className='w-80 text-center'>{`Rp. ${product.price}`}</p>
                <p className={`w-72 text-center border rounded-lg py-1 px-2 text-white ${product.is_active ? 'bg-green-600' : 'bg-red-600'}`}>{product.is_active ? 'AKTIF' : 'TIDAK AKTIF'}</p>
            </div>
        </>
    )
}

export default ProductList