import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchInput = () => {
    return (
        <div className='w-full hidden md:flex items-center mx-3 border-2 rounded-lg focus:border-accent-foreground px-3'>
            <input
                type='text'
                placeholder='Search for a Product'
                className='w-full h-full py-3  rounded-lg focus:outline-none'
            />
            <Search className='size-10 cursor-pointer text-slate-400 hover:scale-110 transition-all' />
        </div>
    );
};

export default SearchInput;
