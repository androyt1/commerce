"use client";
import { Button } from "@/components/ui/button";
import Carousel from "./Carousel";
import FrontCards from "./FrontCards";
import Scroller from "./scroller";

const Header = () => {
    return (
        <section className='flex-1 flex flex-col    bg-background  overflow-hidden px-3 md:px-5 '>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
                <div className='col-span-1 flex flex-col justify-center '>
                    <h1 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl  text-balance font-bold text-primary tracking-tighter uppercase'>
                        Commerce
                    </h1>
                    <p className='mt-4 text-foreground text-balance'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem
                        pariatur dolores molestias aspernatur reprehenderit maiores quaerat aperiam
                    </p>
                    <div className='mt-6'>
                        <Button variant='destructive'>Start Shopping</Button>
                    </div>
                </div>
                <Carousel />
            </div>
            <Scroller />
            <FrontCards />
        </section>
    );
};

export default Header;
