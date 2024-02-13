import React from 'react';
import iphone_free from '../../assets/iphone-free.png';
import cafe_order from '../../assets/cafe-order.png';
import moto_order from '../../assets/moto-order.png';

export const WorksView = () => {
    return (
        <div className='flex flex-col items-center justify-center p-3 md:p-0 mx-0 pb-[80px]'>
            <div className='flex items-center justify-center flex-col'>
                <div><span className='text-[#FF5634] text-[18px] uppercase'>How it works</span></div>
                <div><span className='flex text-[44px] font-bold text-center'>Our simple, yet efficient <br></br> delivery system</span></div>
                <div className='flex text-center pt-8'><span className='text-[#656565]'>Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam facilisis pellentesque</span></div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center mx-0 pt-10 gap-5'>
                <div className='flex flex-col items-center justify-center max-w-[350px]'>
                    <div>
                        <img src={iphone_free} alt='iphone_free' />
                    </div>
                    <div className='flex text-center text-[28px] font-medium'><span>1. Create a free account <br></br> at Deliver X today</span></div>
                    <div className='flex text-center pt-3'><span className='text-[#656565]'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam</span></div>
                </div>
                <div className='flex flex-col items-center justify-center max-w-[350px]'>
                    <div>
                        <img src={cafe_order} alt='cafe_order' />
                    </div>
                    <div className='flex text-center text-[28px] font-medium'><span>2. Order from your <br></br> favorite restaurant</span></div>
                    <div className='flex text-center pt-3'><span className='text-[#656565]'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam</span></div>
                </div>
                <div className='flex flex-col items-center justify-center max-w-[350px]'>
                    <div>
                        <img src={moto_order} alt='moto_order' />
                    </div>
                    <div className='flex text-center text-[28px] font-medium'><span>3. Receive right in your <br></br> house, hassle-free</span></div>
                    <div className='flex text-center pt-3'><span className='text-[#656565]'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam</span></div>
                </div>
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
