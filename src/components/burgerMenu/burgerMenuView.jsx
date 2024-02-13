import React from 'react'

export const BurgerMenuView = () => {
    return (
        <div className='flex z-50 flex-col py-10 px-10 shadow-md'>
            <ul className=''>
                <li className='hover:underline text-center cursor-pointer text-gray-900 text-[18px] font-medium'>Home</li>
                <li className='hover:underline text-center cursor-pointer text-gray-900 text-[18px] font-medium'>About</li>
                <li className='hover:underline text-center cursor-pointer text-gray-900 text-[18px] font-medium'>Pricing</li>
                <li className='hover:underline text-center cursor-pointer text-gray-900 text-[18px] font-medium'>Pages</li>
                <li className='hover:underline text-center cursor-pointer text-gray-900 text-[18px] font-medium'>Cart(0)</li>
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
