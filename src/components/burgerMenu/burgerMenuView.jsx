import React from 'react'
import { Link } from 'react-scroll'

export const BurgerMenuView = ({ setMenu }) => {

    const handleMenu = () => {
        setMenu(false);
    }

    return (
        <div className='flex z-50 flex-col py-10 min-h-screen px-24 shadow-md rounded-lg'>
            <ul className='text-center'>
                <li className='hover:underline cursor-pointer text-[24px] font-medium border-b-2 pr-0  border-gray-300'><Link to="browseView" smooth={true} duration={500} onClick={handleMenu}>Home</Link></li>
                <li className='hover:underline cursor-pointer text-[24px] font-medium border-b-2 pr-0 border-gray-300'>
                    <Link to="worksView" smooth={true} duration={500} onClick={handleMenu}>About</Link></li>
                <li className='hover:underline cursor-pointer text-[24px] font-medium border-b-2 pr-0 border-gray-300'>
                    <Link to="greatView" smooth={true} duration={500} onClick={handleMenu}>Why Great</Link></li>
                <li className='hover:underline cursor-pointer text-[24px] font-medium border-b-2 pr-0 border-gray-300'>
                    <Link to="featuresView" smooth={true} duration={500} onClick={handleMenu}>Features</Link></li>
                <li className='hover:underline cursor-pointer text-[24px] font-medium border-b-2 pr-0 border-gray-300'>
                    <Link to="clientsSayView" smooth={true} duration={500} onClick={handleMenu}>Reviews</Link></li>
            </ul>
            <div className='flex flex-col pt-5 gap-5'>
                <div>
                    <button className='shadow-md hover:bg-gray-100 p-4 rounded-lg active:bg-gray-200 focus:outline-none'><span>Download app</span></button>
                </div>
                <div className=''>
                    <button className='bg-[#FF5634] hover:bg-[#f76447] shadow-md p-4 px-10 rounded-lg active:bg-[#e15c42]'><span className='text-[#FFF]'>Register</span></button>
                </div>
            </div>
        </div>
    )
}
