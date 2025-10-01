import { motion } from "framer-motion";
import { X } from "lucide-react";
import { CheckoutCardItem } from "./CheckoutCardItem";
import { toast } from "sonner";

export const CheckoutCard = () => {

  

  const handleCheckoutOrder = ()=>{

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
          <X
            className="text-black size-8 p-1 rounded-lg bg-black/5 cursor-pointer"
          />
        </div>

        <div className="flex-1 flex flex-col overflow-y-auto p-4">
          {items.length > 0 ? (
            items.map((item:any, index:any) => (
                
              <CheckoutCardItem
                key={index}
                id={item.props.id}
                name={item.props.name}
                img={item.props.img}
                price={item.props.cost}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>

        <div className="p-4 border-t border-black/50 bg-white">
          <div className="flex justify-between text-lg font-semibold">
            <span className="tracking-tight">Total:</span>
            <span>${cartPrice}</span>
          </div>
          <button
          onClick={handleCheckoutOrder}
            className="mt-4 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition"
          >
            Checkout
          </button>
        </div>
      </motion.div>
    </div>
  );
};