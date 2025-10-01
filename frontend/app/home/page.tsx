"use client"
import { Card } from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import { Search } from "@/components/Search";
import axios from "axios";
import { useEffect, useState } from "react";

export default function(){
    const [products,setProducts] = useState([])
    
    async function getProducts(){
        try{
            const response = await axios.get('http://localhost:5000/api/products')
            console.log(response.data)
            setProducts(response.data)
        }catch(err){
            console.log(err )
        }
    }
    useEffect(()=>{
        getProducts()
    },[])
    return(
        <div>
            <Navbar/>
            <Search/>
            <section className="w-full flex justify-center px-4 mb-10">
                <div className="flex flex-wrap gap-4 justify-center ">
                    {products.map((product:any)=>(
                        <Card
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        img={product.imageUrl}
                        cost={product.price}
                    />
                    ))}
                </div>
    
            </section>

        </div>

    )
}