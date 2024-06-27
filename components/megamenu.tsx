"use client";
import React, { useState } from "react";

const MegaMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='relative'>
            <button
                className=' text-primary py-2 px-4 rounded'
                onMouseOver={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}>
                Products
            </button>

            {isOpen && (
                <div
                    className='absolute right-0 sm:w-[500px] md:w-[700px] bg-white shadow-lg p-5 grid grid-cols-1 md:grid-cols-3'
                    onMouseOver={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}>
                    <div className='p-4 space-y-4'>
                        <h5 className='font-bold text-lg'>Electronics</h5>
                        <img
                            src='/images/banner.jpg'
                            alt='Electronics'
                            className='w-full h-32 object-cover object-top'
                        />
                        <ul>
                            <li>
                                <a href='#' className='text-blue-500 hover:text-blue-600'>
                                    Smartphones
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-blue-500 hover:text-blue-600'>
                                    Laptops
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-blue-500 hover:text-blue-600'>
                                    Cameras
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='p-4 space-y-4'>
                        <h5 className='font-bold text-lg'>Fashion</h5>
                        <img
                            src='/images/product_6.png'
                            alt='Electronics'
                            className='w-full h-32 object-cover object-top'
                        />
                        <ul>
                            <li>
                                <a href='#' className='text-blue-500 hover:text-blue-600'>
                                    Men's Clothing
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-blue-500 hover:text-blue-600'>
                                    Women's Clothing
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-blue-500 hover:text-blue-600'>
                                    Accessories
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='p-4 space-y-4'>
                        <h5 className='font-bold text-lg'>Home & Garden</h5>
                        <img
                            src='/images/product_7.png'
                            alt='Electronics'
                            className='w-full h-32 object-cover object-top'
                        />
                        <ul>
                            <li>
                                <a href='#' className='text-blue-500 hover:text-blue-600'>
                                    Furniture
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-blue-500 hover:text-blue-600'>
                                    Decor
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-blue-500 hover:text-blue-600'>
                                    Gardening Tools
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MegaMenu;
