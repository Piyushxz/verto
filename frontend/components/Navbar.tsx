import { ShoppingCartIcon } from "lucide-react";
import { useCartStore, selectCount } from "@/store/cart";

export function Navbar(){
    const count = useCartStore(selectCount)
    const toggleCart = useCartStore((s)=>s.toggleCart)
    return(
        <header className="w-full border-b border-gray-200 flex justify-center ">
                <div className="flex justify-between w-[90%] py-4 items-center  ">
                    <h1 className="text-2xl font-semibold tracking-tighter">
                        xshopify
                    </h1>
                    <button onClick={()=>toggleCart()} className="relative hover:opacity-70 p-1 rounded-lg border border-black/10">
                        <ShoppingCartIcon className="size-6 text-black" />
                        {count > 0 && (
                          <span className="absolute -top-2 -right-2 text-xs bg-black text-white px-1.5 py-0.5 rounded-full">{count}</span>
                        )}
                    </button>
                </div>
        </header>
    )
}