import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import { RxAvatar } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import * as React from 'react';
import MobileHamburger from './mobileHamburger';


const NavBar = () => {


    return (
        <div className=''>
            <div className='h-7 bg-black text-white text-center w-full text-xs p-[0.2rem]'>
                Sign up and get 20% off to your first order. <span className='underline font-semibold'>Sign Up Now</span>
            </div>
            <div className='flex lg:justify-between w-full items-center p-[0.7rem] lg:pr-[2rem]'>
                <div className='flex items-center'>
                    <MobileHamburger/>
                    <p className='sm:text-xl lg:text-3xl -ml-[1rem] -mt-[0.2rem] font-bold'>SHOP.CO</p>
                </div>

                <Link className='hidden md:block' to={''}>Shop</Link>
                <Link className='hidden md:block' to={''}>On sale</Link>
                <Link className='hidden md:block' to={''}>New Arrivals</Link>
                <Link className='hidden md:block' to={''}>Brands</Link>
                <div className='lg:w-1/3 h-10 border-2 border-black lg:border-0 rounded-3xl flex gap-2 ml-[3rem] items-center bg-gray-200'>
                    <CiSearch size={'35px'} className='pl-[0.5rem]' />
                    <input placeholder='Search for products...' className=' placeholder-transparent lg:placeholder-black bg-gray-200 pl-[0.2rem] ml-[0.2rem] focus:outline-none rounded-3xl w-full h-full' type="text" name="" id="" />
                </div>
                <CiShoppingCart className='hidden md:block' size={'35px'} />
                <RxAvatar className='hidden md:block' size={'35px'} />
            </div>
            <div className='mx-[1rem] md:mx-[2.5rem]'>
                <div className='w-full bg-gray-800 h-[0.9px]'></div>
            </div>
        </div>
    )
}

export default NavBar