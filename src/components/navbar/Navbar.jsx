import React from 'react'
import logo from '../../assets/logo.png';

export const NavbarView = () => {
    return (
        <div className='flex w-full shadow-md justify-around h-[120px] items-center'>
            <div className='cursor-pointer'>
                <img src={logo} alt='logo' />
            </div>
            <ul className='flex'>
                <li className='hover:underline cursor-pointer text-[18px] font-medium'>Home</li>
                <li className='hover:underline cursor-pointer text-[18px] font-medium'>About</li>
                <li className='hover:underline cursor-pointer text-[18px] font-medium'>Pricing</li>
                <li className='hover:underline cursor-pointer text-[18px] font-medium'>Pages</li>
                <li className='hover:underline cursor-pointer text-[18px] font-medium'>Cart(0)</li>
            </ul>
            <div className='flex'>
                <div>
                    <button className='shadow-md hover:bg-gray-100 p-4 rounded-lg active:bg-gray-200 focus:outline-none'><span>Download app</span></button>
                </div>
                <div className='ml-5'>
                    <button className='bg-[#FF5634] hover:bg-[#f76447] shadow-md p-4 rounded-lg active:bg-[#e15c42]'><span className='text-[#FFF]'>Register</span></button>
                </div>
            </div>
        </div>
    )
}
