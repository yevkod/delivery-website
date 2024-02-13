import React from 'react'
import logo from '../../assets/logo.png';
import burger from '../../assets/burgerIcon.svg';

export const NavbarView = ({ menu, setMenu }) => {

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <div className='flex w-full fixed z-[10000] bg-white shadow-md justify-around h-[120px] items-center'>
            <div className='flex w-full justify-between items-center max-w-[80rem]'>
                <div className='p-5 lg:p-0 cursor-pointer w-[10rem]'>
                    <img src={logo} alt='logo' />
                </div>
                <ul className='hidden lg:flex'>
                    <li className='hover:underline cursor-pointer text-[18px] font-medium'>Home</li>
                    <li className='hover:underline cursor-pointer text-[18px] font-medium'>About</li>
                    <li className='hover:underline cursor-pointer text-[18px] font-medium'>Pricing</li>
                    <li className='hover:underline cursor-pointer text-[18px] font-medium'>Pages</li>
                    <li className='hover:underline cursor-pointer text-[18px] font-medium'>Cart(0)</li>
                </ul>
                <div className='flex lg:hidden mr-5 justify-end w-10' onClick={handleMenu}>
                    <img src={burger} alt='burger' />
                </div>
                <div className='hidden lg:flex gap-5 md:gap-0'>
                    <div>
                        <button className='shadow-md hover:bg-gray-100 p-4 rounded-lg active:bg-gray-200 focus:outline-none'><span>Download app</span></button>
                    </div>
                    <div className='ml-5'>
                        <button className='bg-[#FF5634] hover:bg-[#f76447] shadow-md p-2 lg:p-4 rounded-lg active:bg-[#e15c42]'><span className='text-[#FFF]'>Register</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
