import React from 'react'
import { trustedArray } from './TrustedArray';
import Marquee from "react-fast-marquee";


export const TrustedView = () => {
    return (
        <div className='flex flex-col items-center justify-center mx-0 p-8 md:pt-[150px] md:pb-[100px]'>
            <div>
                <span className='text-[#656565] text-[20px]'>Trusted by 5,000+ restaurants around the world</span>
            </div>
            <div className='flex pt-8 w-full'>
                <Marquee autoFill play>
                    <div className='flex gap-10 first:pr-10'>
                        {trustedArray.map((item) => (
                            <div><img src={item.icon} alt='items' /></div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    )
}
