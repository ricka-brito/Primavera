import { Icon } from "@iconify/react";

const SearchBar = () => {
    return (
        <div className="w-full bg-[#F5F5F5] border border-[#B9B9B9] flex items-center text-xl rounded-full p-4 h-16">
            <Icon icon="material-symbols:search" className="text-[#686868] size-8 mr-2" />
            <input className="bg-transparent outline-none w-full h-full" placeholder="Pesquise"/>
        </div>
    )
}

export default SearchBar;