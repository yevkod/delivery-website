import React from 'react'
import { footerArray } from './FooterArray'

export const FooterView = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5 pt-[90px] pb-[90px] max-w-[90rem] mx-auto'>
            <div>
                <div className='text-center sm:text-start'>
                    <span className='text-[20px] font-medium '>Menu</span>
                </div>
                <ul className='pt-8 text-center sm:text-start'>
                    <li className='pr-0'>Home</li>
                    <li className='pr-0'>About</li>
                    <li className='pr-0'>Contact</li>
                    <li className='pr-0'>Blog</li>
                    <li className='pr-0'>Blog posts</li>
                </ul>
            </div>
            <div>
                <div className='text-center pt-8 sm:pt-0 sm:text-start'>
                    <span className='text-[20px] font-medium'>Utility pages</span>
                </div>
                <ul className='pt-8 text-center sm:text-start'>
                    <li className='pr-0'>Start here</li>
                    <li className='pr-0'>Styleguide</li>
                    <li className='pr-0'>Password protected</li>
                    <li className='pr-0'>404 Not found</li>
                    <li className='pr-0'>Licenses</li>
                    <li className='pr-0'>Changelog</li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <div className='pb-8 text-center sm:text-start pt-8 sm:pt-0'>
                    <span className='text-[20px] font-medium'>Available in</span>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 '>
                    {footerArray.map((item) => (
                        <div className='flex justify-center md:justify-start gap-4 last:mr-8' >
                            <div><img src={item.icon} alt={item.title} /></div>
                            <div className='flex items-center text-[18px font-medium]'>{item.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
