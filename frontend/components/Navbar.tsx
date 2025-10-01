import { ShoppingCartIcon } from "lucide-react";

export function Navbar(){

    return(
        <header className="w-full border-b border-gray-200 flex justify-center ">
                <div className="flex justify-between w-[90%] py-4 items-center  ">
                    <h1 className="text-2xl font-semibold tracking-tighter">
                        xshopify
                    </h1>
                    <button className="hover:opacity-70 p-1 rounded-lg border border-black/10">
                        <ShoppingCartIcon className="size-6 text-black" />
                    </button>
                </div>
        </header>
    )
}