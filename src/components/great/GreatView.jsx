import React from 'react';
import lightning from '../../assets/lightning.png';
import approve from '../../assets/approve-person.png';
import cash from '../../assets/cash.png';
import wallet from '../../assets/wallet.png';
import bg_why from '../../assets/bg-why.png';
import iphone_why from '../../assets/iphone-why.png';

export const GreatView = () => {
    return (
        <div className='flex flex-col items-center justify-center p-5 lg:p-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-52'>
                <div className='flex flex-col justify-center'>
                    <div className='text-center lg:text-left'><span className='text-[2rem] font-bold leading-[50px]'>Learn why Deliver X is <br></br> great for your restaurant</span></div>
                    <div className='pt-5  max-w-[541px] text-center lg:text-left'><span className='text-[#656565]'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam</span></div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8'>
                        <div className='flex flex-col items-center sm:items-baseline'>
                            <div className='flex'>
                                <img className='flex justify-center' src={lightning} alt='lightning' />
                            </div>
                            <div>
                                <span className='text-[22px] font-medium'>Fast deliveries</span>
                            </div>
                            <div>
                                <span className='text-[#656565]'>Lorem ipsum dolor sit amet consecte</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center sm:items-baseline'>
                            <div>
                                <img src={approve} alt='approve' />
                            </div>
                            <div>
                                <span className='text-[22px] font-medium'>Fast deliveries</span>
                            </div>
                            <div>
                                <span className='text-[#656565]'>Lorem ipsum dolor sit amet consecte</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center sm:items-baseline'>
                            <div>
                                <img src={cash} alt='cash' />
                            </div>
                            <div>
                                <span className='text-[22px] font-medium'>Fast deliveries</span>
                            </div>
                            <div>
                                <span className='text-[#656565]'>Lorem ipsum dolor sit amet consecte</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center sm:items-baseline'>
                            <div>
                                <img src={wallet} alt='wallet' />
                            </div>
                            <div>
                                <span className='text-[22px] font-medium'>Fast deliveries</span>
                            </div>
                            <div>
                                <span className='text-[#656565]'>Lorem ipsum dolor sit amet consecte</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:flex relative mx-auto'>
                    <div className='z-20 justify-end'> <img src={bg_why} alt='bg_why' /></div>
                    <div className='absolute top-[10%] left-[-20%] z-10'> <img src={iphone_why} alt='iphone_why' /></div>
                </div>
            </div>
            <div className='flex pt-12 lg:pt-[5rem]'>
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
