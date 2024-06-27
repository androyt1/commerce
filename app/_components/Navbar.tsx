"use client";

import { ModeToggle } from "@/components/mode-toggler";
import LoginButton from "./LoginButton";
import { ShoppingCart } from "lucide-react";
import SearchInput from "./SearchInput";
import NavMenu from "./NavMenu";
import MegaMenu from "@/components/megamenu";

const Navbar = () => {
    return (
        <header className=' h-20 w-full flex justify-between items-center px-3 md:px-5  top-0 z-50 bg-background '>
            <div className='text-xl md:text-2xl font-bold'>Logo</div>

            <SearchInput />
            {/* <NavMenu /> */}
            <MegaMenu />
            <div className='md:flex items-center gap-4 hidden '>
                <LoginButton />
                <ModeToggle />
                <ShoppingCart className='h-6 w-6' />
            </div>
        </header>
    );
};

export default Navbar;
