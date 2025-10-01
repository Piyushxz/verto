import { Minus, Plus } from "lucide-react"
import { useState } from "react"


export const CheckoutCardItem = (props:{
    img:string,
    name:string,
    price:string,
    id:string
})=>{
    const [count,setCount] = useState(1)
    return(
        <div className="flex  font-primary gap-2 border-b border p-2">
        <div className="w-18 h-18 border">
            <img className="h-full w-full object-cover" src={props.img} />
        </div>
        <div className="flex flex-col">
            <h1 className="tracking-tight text-sm font-semibold">    {props.name}
            </h1>
            <h1>${props.price}</h1>
            <div className="flex items-center gap-2">
                <Minus 
                className="px-2 text-black bg-red-500 rounded-lg size-6"/>
                <h1>{count}</h1>
                <Plus 
                 className="px-2 text-black bg-green-600 rounded-lg size-6"/>
            </div>
        </div>

        </div>
    )
}