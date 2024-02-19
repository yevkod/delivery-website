import React from 'react'
import bg_browse from '../../assets/bg-first.png';
import iphone_browse from '../../assets/iphone-browse.png';

export const BrowseView = () => {
    return (
        <div className='flex items-center justify-center max-w-[90rem] mx-auto'>
            <div className='grid grid-cols-1 place-content-center mt-[120px] p-4 lg:p-0 md:grid-cols-2 w-full justify-center items-center'>
                <div className='flex flex-col items-start justify-center mx-auto'>
                    <div>
                        <span className='text-[#FF5634] text-[18px] font-medium'>Food Delivery Service</span>
                    </div>
                    <div className='pt-6'>
                        <span className='font-bold text-[3rem] leading-[55px]'>Delicious food <br></br>at your fingertips</span>
                    </div>
                    <div className='max-w-[556px] pt-6'>
                        <span className='text-[12px]'>A ultricies eget condimentum sed faucibus enim maecenas variusd dolor sitegestas hendrerit et maecenas habitant mattis</span>
                    </div>
                    <div className='flex pt-8'>
                        <div>
                            <button className='bg-[#FF5634] hover:bg-[#f76447] shadow-md p-2 lg:p-4 rounded-lg active:bg-[#e15c42]'><span className='text-[#FFF]'>Register restaurant</span></button>
                        </div>
                        <div className='ml-5'>
                            <button className='shadow-md hover:bg-gray-100 p-2 lg:p-4 rounded-lg active:bg-gray-200'><span>Download app</span></button>
                        </div>
                    </div>
                    <div></div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 mx-auto'>
                        <div><div className='text-[2rem] font-bold'>10m<span className='text-[#FF5634]'>+</span></div><span className='text-[18px] text-[#656565]'>Happy customers</span></div>
                        <div><div className='text-[2rem] font-bold'>500k<span className='text-[#FF5634]'>+</span></div><span className='text-[18px] text-[#656565]'>Restaurants available</span></div>
                        <div><div className='text-[2rem] font-bold'>30m<span className='text-[#FF5634]'>+</span></div><span className='text-[18px] text-[#656565]'>Successful deliveries</span></div>
                    </div>
                </div>
                <div className='pt-8 md:pt-0 relative flex mx-auto max-w-[100%]'>
                    <div>
                        <img className='object-contain' src={bg_browse} alt='bg_browse' />
                    </div>
                    <div className='hidden lg:flex absolute top-[16%] left-[-5%] xl:w-[23rem] xl:left-[-25%] lg:w-[18rem] max-w-[100%]'>
                        <img className='object-contain w-[100%]' src={iphone_browse} alt='iphone_browse' />
                    </div>
                </div>
            </div>
        </div>
    )
}
