import React from 'react'
import Rating from '@mui/material/Rating';

const ProductCard = ({ data }) => {
    return (
        <div className='flex flex-col cursor-pointer rounded-lg gap-2 mt-5 justify-start items-start w-44 h-auto lg:h-auto lg:w-auto'>
            <div className='lg:h-60 lg:w-60 h-44 w-44 bg-gray-100 rounded-xl flex justify-center items-center'>
                <img src={data.image} alt="data-image" className='h-auto w-auto' />
            </div>
            <div>
                <p className='font-semibold'>{data.name}</p>
                <p>{data.rating}/5</p>
                <Rating name="half-rating-read" defaultValue={data.rating} precision={0.1} readOnly />
                <p className='font-semibold'>${data.price}<span className='pl-1 line-through text-gray-500' >${20 / 100 * Number(`${data.price}`) + Number(`${data.price}`)}</span><span className='text-red-500 text-sm pl-1'>-20%</span></p>
            </div>
        </div>
    )
}

export default ProductCard