import { motion } from "framer-motion";
import { X } from "lucide-react";
import { CheckoutCardItem } from "./CheckoutCardItem";
import { toast } from "sonner";
import { useCartStore, selectTotal } from "@/store/cart";
import axios from "axios";
import { useState } from "react";

export const CheckoutCard = () => {
  const items = useCartStore((s)=>s.items)
  const total = useCartStore(selectTotal)
  const toggleCart = useCartStore((s)=>s.toggleCart)
  const clear = useCartStore((s)=>s.clear)
  const [orderModal, setOrderModal] = useState<{ open: boolean; total: number; products: any[]; orderId: number | null }>({ open: false, total: 0, products: [], orderId: null })

  const handleCheckoutOrder = async ()=>{
    const id = toast.loading("Placing order...")
    if(items.length === 0){
      toast.error("Cart is empty")
      return
    }
    try{
      const payload = { items: items.map(i=>({ productId: i.id, quantity: i.quantity })) }
      const res = await axios.post('http://localhost:5000/api/orders', payload)
      console.log(res)
      if(res.status === 200){
        toast.success("Order placed")
        setOrderModal({ open: true, total: res.data?.total || 0, products: res.data?.items || [], orderId: res.data?.orderId || null })
      } else {
        toast.error("Checkout failed")
      }
      
    }catch(err){
      toast.error("Checkout failed")
    }
    finally{
        toast.dismiss(id)
    }
  }

  return (
    <div className="font-primary fixed bottom-0 right-0 z-10">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 200, bounce: 0.3, mass: 0.1 }}
        className="w-94 md:w-90 h-[600px] border border-black/15 rounded-2xl bg-white flex flex-col"
      >
        <div className="p-4 flex justify-between items-center border-b border-black/50">
          <h1 className="text-xl text-black tracking-tight font-semibold">Cart</h1>
          <X onClick={()=>toggleCart(false)} className="text-black size-8 p-1 rounded-lg bg-black/5 cursor-pointer" />
        </div>

        <div className="flex-1 flex flex-col overflow-y-auto p-4">
          {items.length > 0 ? (
            items.map((item, index) => (
              <CheckoutCardItem
                key={index}
                id={item.id}
                name={item.name}
                img={item.img}
                price={item.price}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>

        <div className="p-4 border-t border-black/50 bg-white">
          <div className="flex justify-between text-lg font-semibold">
            <span className="tracking-tight">Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
          onClick={handleCheckoutOrder}
            className="mt-4 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition"
          >
            Checkout
          </button>
        </div>
      </motion.div>
      {orderModal.open && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50"/>
          <div className="relative z-30 bg-white w-[90%] max-w-lg rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold tracking-tight">Order placed successfully</h2>
              <button onClick={()=>{ setOrderModal({ open:false, total:0, products:[], orderId:null }); clear(); toggleCart(false); }} className="p-1 rounded hover:bg-black/5">
                <X className="size-5"/>
              </button>
            </div>
            {orderModal.orderId && (
              <p className="text-sm text-gray-600 mb-3">Order ID: {orderModal.orderId}</p>
            )}
            <div className="max-h-60 overflow-y-auto border rounded-lg">
              <ul className="divide-y">
                {orderModal.products.map((p:any)=> (
                  <li key={p.id} className="p-3 flex items-center gap-3">
                    <img src={p.imageUrl} className="w-12 h-12 object-cover rounded"/>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{p.name}</p>
                      <p className="text-xs text-gray-600">${p.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-700">Amount charged</span>
              <span className="text-lg font-semibold">${orderModal.total.toFixed(2)}</span>
            </div>
            <button onClick={()=>{ setOrderModal({ open:false, total:0, products:[], orderId:null }); clear(); toggleCart(false); }} className="mt-5 w-full bg-black text-white py-2.5 rounded-lg hover:bg-gray-900">Continue</button>
          </div>
        </div>
      )}
    </div>
  );
};