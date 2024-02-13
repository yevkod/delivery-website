import React from 'react'
import { featuresArray } from './FeaturesArray'


export const FeaturesView = () => {
    return (
        <div className='flex flex-col items-center justify-center p-[50px]'>
            <div className='flex flex-col items-center justify-center'>
                <div>
                    <span className='text-[#FF5634] text-[18px]'>Our Features</span>
                </div>
                <div className='pt-5 text-center'>
                    <span className='text-[44px] font-bold leading-[45px]'>Learn why Deliver is great for <br></br> customers too!</span>
                </div>
                <div className='pt-5 text-center'>
                    <span className='text-[#656565] text-[12px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam facilisis pellentesque</span>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-28 pt-12'>
                {featuresArray.map((item) => (
                    <div className='max-w-[350px]'>
                        <div className='flex items-center justify-center'><img src={item.icon} alt={item.title} /></div>
                        <div className='flex items-center justify-center pt-5'><span className='text-[28px] font-medium'>{item.title}</span></div>
                        <div className='flex items-center justify-center text-center pt-5 text-[#656565]'><span>{item.description}</span></div>
                    </div>
                ))}
            </div>
            <div className='flex pt-8'>
                <div>
                    <button className='bg-[#FF5634] hover:bg-[#f76447] shadow-md p-2 lg:p-4 rounded-lg active:bg-[#e15c42]'><span className='text-[#FFF]'>Register restaurant</span></button>
                </div>
                <div className='ml-5'>
                    <button className='shadow-md hover:bg-gray-100 p-2 lg:p-4 rounded-lg active:bg-gray-200'><span>Download app</span></button>
                </div>
            </div>
        </div>
    )
}
