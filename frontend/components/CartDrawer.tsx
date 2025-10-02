"use client"
import { useCartStore } from "@/store/cart"
import { CheckoutCard } from "./CheckoutCard"

export function CartDrawer(){
  const isOpen = useCartStore(s=>s.isOpen)
  if(!isOpen) return null
  return <CheckoutCard/>
}


