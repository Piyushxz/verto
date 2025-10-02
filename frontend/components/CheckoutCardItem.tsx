import { Minus, Plus, Trash2 } from "lucide-react"
import { useCartStore } from "@/store/cart"


export const CheckoutCardItem = (props:{
    img:string,
    name:string,
    price:number,
    id:string | number
})=>{
    const increment = useCartStore(s=>s.increment)
    const decrement = useCartStore(s=>s.decrement)
    const remove = useCartStore(s=>s.removeItem)
    const item = useCartStore(s=>s.items.find(i=>i.id===props.id))
    const count = item?.quantity ?? 1
    return(
        <div className="flex  font-primary gap-2 border-b border p-2">
        <div className="w-18 h-18 border">
            <img className="h-full w-full object-cover" src={props.img} />
        </div>
        <div className="flex flex-col">
            <h1 className="tracking-tight text-sm font-semibold">    {props.name}
            </h1>
            <h1>${props.price.toFixed(2)}</h1>
            <div className="flex items-center gap-2">
                <Minus onClick={()=>decrement(props.id)}
                className="px-2 text-black bg-red-500 rounded-lg size-6 cursor-pointer"/>
                <h1>{count}</h1>
                <Plus onClick={()=>increment(props.id)}
                 className="px-2 text-black bg-green-600 rounded-lg size-6 cursor-pointer"/>
            </div>
        </div>
        <button onClick={()=>remove(props.id)} className="ml-auto text-red-600 hover:opacity-80"><Trash2 className="size-5"/></button>

        </div>
    )
}