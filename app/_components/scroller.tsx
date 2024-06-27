"use client";
import Marquee from "react-fast-marquee";
import { StripeIcon, ResendIcon, TailwindcssIcon, NextjsIcon } from "./icons";

const items = [
    {
        label: "Stripe",
        icon: StripeIcon,
        className: "w-10 h-auto aspect-square",
    },
    {
        label: "Resend",
        icon: ResendIcon,
        className: "w-10 p-5 h-auto aspect-square",
    },
    {
        label: "TailwindCSS",
        icon: TailwindcssIcon,
        className: "w-20 px-5 h-auto aspect-square",
    },
    {
        label: "NextJS",
        icon: NextjsIcon,
        className: "w-20 p-5 h-auto aspect-square",
    },
];

export function Scroller() {
    return (
        <section className='relative my-3'>
            <div className='absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-background pointer-events-none z-10'></div>
            <div className='absolute top-0 right-0 w-1/4 h-full bg-gradient-to-r from-transparent to-background pointer-events-none z-10'></div>
            <Marquee speed={30} autoFill direction='right'>
                {items.map((item, i) => (
                    <item.icon
                        key={i}
                        className={
                            item.className +
                            "text-foreground opacity-50 hover:opacity-100 transition duration-300 ml-32 cursor-pointer"
                        }
                    />
                ))}
            </Marquee>
        </section>
    );
}

export default Scroller;
