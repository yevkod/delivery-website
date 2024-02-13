import React from 'react'
import logo from '../../assets/logo.png';
import burger from '../../assets/burgerIcon.svg';

export const NavbarView = (menu) => {
    return (
        <div className='flex w-full shadow-md justify-around h-[120px] items-center'>
            <div className='flex w-full justify-between items-center max-w-[80rem]'>
                <div className='cursor-pointer w-[10rem]'>
                    <img src={logo} alt='logo' />
                </div>

                <ul className='hidden md:flex'>
                    <li className='hover:underline cursor-pointer text-[18px] font-medium'>Home</li>
                    <li className='hover:underline cursor-pointer text-[18px] font-medium'>About</li>
                    <li className='hover:underline cursor-pointer text-[18px] font-medium'>Pricing</li>
                    <li className='hover:underline cursor-pointer text-[18px] font-medium'>Pages</li>
                    <li className='hover:underline cursor-pointer text-[18px] font-medium'>Cart(0)</li>
                </ul>
                {menu ? (
                    <></>
                ) : (
                    <></>
                )}
                <div className='flex gap-5 md:gap-0'>
                    <div className='flex md:hidden justify-end w-10'>
                        <img src={burger} alt='burger' />
                    </div>
                    <div>
                        <button className='shadow-md hover:bg-gray-100 p-4 rounded-lg active:bg-gray-200 focus:outline-none'><span>Download app</span></button>
                    </div>
                    <div className='ml-5'>
                        <button className='bg-[#FF5634] hover:bg-[#f76447] shadow-md p-4 rounded-lg active:bg-[#e15c42]'><span className='text-[#FFF]'>Register</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
