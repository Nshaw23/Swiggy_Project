import React from "react"
import { GroceryGridCard } from "../Utils/GroceryData"
import GroceryCard from "./GroceryCard"

export default function GroceryOption() {

    return(
        
        <div  className="mt-20 w-[80%] container mx-auto">
            <h1 className="text-2xl font-bold">Shop Grocries on Instamart</h1>
            <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-3">
                {
                    GroceryGridCard.map((foodData)=> <GroceryCard key={foodData.id} foodData={foodData} />)
                }
                </div>
            </div>
        
    )
}