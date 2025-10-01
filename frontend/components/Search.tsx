import { SearchIcon, SlidersHorizontalIcon } from "lucide-react";

export const Search = () => {

  return (
    <div 

    className="w-full pt-8 pb-8 ">
      <div className="flex justify-center items-center flex-col gap-4">
        <div className="flex gap-2 items-center">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
          <input 
            className=" focus:outline-none focus:ring-1 focus:ring-black transition-all text-black font-primary tracking-tight py-3 pl-10 pr-4 flex rounded-lg items-center w-70 md:w-80 border border-black/15 focus:outline-none"
            placeholder="Search Anything"
          />
        </div>

        </div>

      </div>
    </div>
  );
};