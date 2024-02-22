import React from 'react';
import logo from '../../assets/logo.png';

export const DeliverView = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 justify-center max-w-[90rem] p-2 mx-auto lg:pt-[45px] lg:pb-[65px] border-b-2 border-[#CACACA]'>
            <div className='flex flex-col justify-center md:justify-start'>
                <div className='flex justify-center md:justify-start hover:scale-110 transition-all'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='pt-8 text-center md:text-left'>
                    <span className='text-[#656565]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut.</span>
                </div>
            </div>
            <div>
                <div className='flex pt-8 justify-center sm:justify-end'>
                    <div>
                        <button className='bg-[#FF5634] hover:scale-110 transition-all hover:bg-[#f76447] shadow-md p-2 lg:p-4 rounded-lg active:bg-[#e15c42]'><span className='text-[#FFF]'>Download for iOS</span></button>
                    </div>
                    <div className='ml-5'>
                        <button className='bg-[#FF5634] hover:scale-110 transition-all hover:bg-[#f76447] shadow-md p-2 lg:p-4 rounded-lg active:bg-[#e15c42]'><span className='text-[#FFF]'>Download for Android</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
