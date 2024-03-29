import React from 'react'
import img_first from '../../assets/img-first-away.png';
import img_second from '../../assets/img-second-away.png';
import img_third from '../../assets/img-third-away.png';
import img_fourth from '../../assets/img-fourth-away.png';
import img_fifth from '../../assets/img-fifth-away.png';
import img_sixth from '../../assets/img-sixth-away.png';

export const AwayView = () => {
    return (
        <div className='flex bg-black items-center justify-center overflow-hidden mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:p-5'>
                <div className='flex flex-col items-start justify-center p-3 lg:p-0'>
                    <div>
                        <span className='text-white leading-[55px] text-[2rem] md:text-[3rem] font-bold'>A delicious burger is <br></br> one tap away!</span>
                    </div>
                    <div className='pt-5'>
                        <span className='text-white text-[12px] '>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam</span>
                    </div>
                    <div className='pt-5'>
                        <button className='bg-[#FF5634] hover:scale-110 transition-all hover:bg-[#f76447] shadow-md p-2 lg:p-4 rounded-lg active:bg-[#e15c42]'><span className='text-[#FFF]'>Download app</span></button>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='grid grid-rows-1 gap-6'>
                        <div className='hover:scale-110 transition-all'><img src={img_first} alt='img_first' /></div>
                        <div className='hover:scale-110 transition-all'><img src={img_second} alt='img_second' /></div>
                        <div className='hover:scale-110 transition-all'><img src={img_third} alt='img_third' /></div>
                    </div>
                    <div className='grid grid-rows-1 gap-6'>
                        <div className='hover:scale-110 transition-all'><img src={img_fourth} alt='img_fourth' /></div>
                        <div className='hover:scale-110 transition-all'><img src={img_fifth} alt='img_second' /></div>
                        <div className='hover:scale-110 transition-all'><img src={img_sixth} alt='img_sixth' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
