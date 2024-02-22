import React from 'react';
import img_1 from '../../assets/iphone-why.png';
import img_2 from '../../assets/iphone-browse.png';

export const ClientsTodayView = () => {
    return (
        <div className='flex justify-center relative bg-black w-full p-5 lg:p-48 mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='flex lg:pr-20 flex-col'>
                    <div>
                        <div className='text-center lg:text-start'><span className='text-white text-[2rem] md:text-[3rem] leading-[40px]'>Start attracting<br></br> more clients today!</span></div>
                    </div>
                    <div className='max-w-[450px] pt-4'>
                        <div className='text-center lg:text-start'><span className='text-[12px] text-white'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</span></div>
                    </div>
                    <div className='mx-auto lg:mx-0 pt-8'>
                        <button className='bg-[#FF5634] hover:scale-110 transition-all hover:bg-[#f76447] shadow-md p-2 lg:p-4 rounded-lg active:bg-[#e15c42]'><span className='text-[#FFF]'>Register restaurant</span></button>
                    </div>
                </div>
                <div className='hidden lg:flex'>
                    <div className='flex absolute top-[-10%] z-20 -rotate-12'>
                        <img src={img_1} alt='img_1' />
                    </div>
                    <div className='flex absolute top-[-9%] left-[55%] z-10 rotate-12'>
                        <img src={img_2} alt='img_2' />
                    </div>
                </div>
            </div>
        </div>
    )
}
