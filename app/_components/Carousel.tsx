import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024, // Desktops and large screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600, // Tablets
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480, // Smaller devices like mobile phones
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='col-span-2  h-[50vh] '>
            <Slider
                {...settings}
                className='w-full h-full flex-1 p-5  bg-purple-50 overflow-hidden'>
                <div className='w-full   h-[50vh] flex justify-center items-center '>
                    <Image
                        src='/images/product_1.png'
                        alt='product 1'
                        width={700}
                        height={700}
                        className='object-cover w-full h-full object-top'
                        priority
                    />
                </div>
                <div className='w-full  h-[50vh]   flex justify-center items-center '>
                    <Image
                        src='/images/product_2.png'
                        alt='product 2'
                        width={700}
                        height={700}
                        className='object-cover w-full h-full object-top'
                    />
                </div>
                <div className='w-full  h-[50vh] b  flex justify-center items-center '>
                    <Image
                        src='/images/product_3.png'
                        alt='product 3'
                        width={700}
                        height={700}
                        className='object-cover w-full h-full object-top'
                    />
                </div>
                <div className='w-full  h-[50vh]  flex justify-center items-center'>
                    <Image
                        src='/images/product_4.png'
                        alt='product 4'
                        width={700}
                        height={700}
                        className='object-cover w-full h-full object-top'
                    />
                </div>
                <div className='w-full  h-[50vh]   flex justify-center items-center'>
                    <Image
                        src='/images/product_5.png'
                        alt='product 5'
                        width={700}
                        height={700}
                        className='object-cover w-full h-full object-top'
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
