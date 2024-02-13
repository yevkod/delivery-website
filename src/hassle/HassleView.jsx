import React from 'react';
import courier from '../assets/courier.png';
import maps from '../assets/maps.png';
import pos from '../assets/pos.png';
import order from '../assets/order.png';
import burger from '../assets/burger-courier.png';
import image_burgers from '../assets/image-burgers.png';
import busket from '../assets/busket.png';
import location from '../assets/geo.png';

export const HassleView = () => {
    return (
        <div className='pt-[45px] pb-[45px] max-w-[1430px] mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2'>

                <div className='flex relative bg-[#FF5634] max-w-[100%] rounded-3xl w-[18rem] mx-auto lg:mx-0 h-[43rem] lg:w-[37rem]'>
                    <div className='flex absolute top-[33%] left-[35%] z-20'>
                        <img src={courier} alt='courier' />
                    </div>
                    <div className='flex absolute top-[12%] left-[12%] z-10'>
                        <img src={maps} alt='maps' />
                    </div>
                </div>
                <div className='flex flex-col xl:pl-[60px] p-5 md:p-0 justify-center'>

                    <div className='text-center md:text-left pt-9 md:pt-0'>
                        <span className='text-[44px] font-bold leading-[40px]'>Hassle-free restaurant <br></br> management</span>
                    </div>
                    <div className='max-w-[480px] pt-5'>
                        <span className='text-[#656565]'>Bibendum consectetur eu quis dignissim purus quis felis urna in enim elementum tellus amet ullamcorper ante in sollicitudin sollicitudin pellentesque</span>
                    </div>
                    <div className='flex flex-col pt-5 gap-6'>
                        <div className='flex'>
                            <div className='max-w-[200px]'>
                                <img src={order} alt='order' />
                            </div>
                            <div className='flex flex-col'>
                                <div>
                                    <span className='text-[24px]'>Order management</span>
                                </div>
                                <div className='flex max-w-[450px]'>
                                    <span className='text-[13px] text-[#656565]'>Aliquam vestibulum morbi blandit cursus risus atomol ultrices proin gravida hendrerit lectusa.</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex max-w-[100%]'>
                            <div className='max-w-[200px]'>
                                <img src={pos} alt='pos' />
                            </div>
                            <div className='flex flex-col'>
                                <div>
                                    <span className='text-[24px]'>POS integration</span>
                                </div>
                                <div className='flex max-w-[500px]'>
                                    <span className='text-[13px] text-[#656565]'>Lobortis elementum nibh tellus molestie nunc nonolfu celerisque fermentum dui faucibus inomle.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 p-5 lg:pt-48'>
                <div className='flex flex-col justify-center'>
                    <div>
                        <span className='text-[44px] font-bold leading-[40px]'>Super convenient for <br></br> customers too</span>
                    </div>
                    <div className='max-w-[480px] pt-5'>
                        <span className='text-[#656565]'>Bibendum consectetur eu quis dignissim purus quis felis urna in enim elementum tellus amet ullamcorper ante in sollicitudin sollicitudin pellentesque</span>
                    </div>
                    <div className='flex flex-col pt-5 gap-6'>
                        <div className='flex'>
                            <div className='max-w-[200px]'>
                                <img src={busket} alt='busket' />
                            </div>
                            <div className='flex flex-col'>
                                <div>
                                    <span className='text-[24px]'>Order from app</span>
                                </div>
                                <div className='flex max-w-[450px]'>
                                    <span className='text-[13px] text-[#656565]'>Aliquam vestibulum morbi blandit cursus risus atomol ultrices proin gravida hendrerit lectusa.</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='max-w-[200px]'>
                                <img src={location} alt='location' />
                            </div>
                            <div className='flex flex-col'>
                                <div>
                                    <span className='text-[24px]'>POS integration</span>
                                </div>
                                <div className='flex max-w-[500px]'>
                                    <span className='text-[13px] text-[#656565]'>Lobortis elementum nibh tellus molestie nunc nonolfu celerisque fermentum dui faucibus inomle.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex relative bg-[#FF5634] max-w-[100%] mt-9 rounded-3xl w-[18rem] mx-auto lg:mx-0 h-[43rem] lg:w-[37rem]'>
                    <div className='flex absolute top-[33%] left-[12%] z-20'>
                        <img src={burger} alt='burger' />
                    </div>
                    <div className='flex absolute top-[12%] left-[30%] z-10'>
                        <img src={image_burgers} alt='image_burgers' />
                    </div>
                </div>
            </div>
        </div>
    )
}
