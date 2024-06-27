import React from "react";
import Image from "next/image";

const FrontCards = () => {
    return (
        <div className='flex-1 grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 my-5'>
            <section className='p-5  bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer'>
                <Image src='/images/product_13.png' alt='product 13' width={500} height={500} />
            </section>
            <section className='p-5  bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer'>
                <Image src='/images/product_14.png' alt='product 14' width={500} height={500} />
            </section>

            <section className='p-5  bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer'>
                <Image src='/images/product_15.png' alt='product 15' width={500} height={500} />
            </section>

            <section className='p-5  bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer'>
                <Image src='/images/product_16.png' alt='product 16' width={500} height={500} />
            </section>

            <section className='p-5  bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer'>
                <Image src='/images/product_17.png' alt='product 17' width={500} height={500} />
            </section>
        </div>
    );
};

export default FrontCards;
