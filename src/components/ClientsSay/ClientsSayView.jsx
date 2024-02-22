import React from 'react'
import { clientsSayArray } from './ClientsSayArray'

export const ClientsSayView = () => {
    return (
        <div className='flex bg-[#FAFAFA] md:mt-[90px] mx-auto w-full justify-center p-5 pt-[90px] pb-[90px]'>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 items-end'>
                    <div className='flex flex-col'>
                        <div className='flex justify-center md:justify-start'>
                            <span className='text-[44px]'>What our clients say</span>
                        </div>
                        <div className='flex justify-center md:justify-start pt-3 md:pt-0'>
                            <span className='text-[#656565] text-[12px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac</span>
                        </div>
                    </div>
                    <div className='flex mx-auto md:mx-0 md:justify-end pt-7 md:pt-0'>
                        <div>
                            <button className='bg-[#FF5634] hover:scale-110 transition-all hover:bg-[#f76447] shadow-md p-2 lg:p-4 rounded-lg active:bg-[#e15c42]'><span className='text-[#FFF]'>Register restaurant</span></button>
                        </div>
                        <div className='ml-5'>
                            <button className='shadow-md hover:scale-110 transition-all hover:bg-gray-100 p-2 lg:p-4 rounded-lg active:bg-gray-200'><span>Download app</span></button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-12'>
                    {clientsSayArray.map((item) => (
                        <div className='bg-white rounded-2xl max-w-[389px] p-9 hover:scale-110 transition-all'>
                            <div className='flex'>
                                <div>
                                    <img src={item.icon} alt={item.name} />
                                </div>
                                <div className='flex flex-col pl-3'>
                                    <div className='text-[18px] font-medium'>{item.name}</div>
                                    <div className='text-[#FF5634] text-[16px]'>{item.location}</div>
                                </div>
                            </div>
                            <div className='text-[#656565] text-[18px] pt-4'>{item.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
