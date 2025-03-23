import React from "react"
import { imageGridCards } from "../Utils/FoodData"
import FoodCard from "./FoodCard"

export default function FoodOption() {

    return (
        <>
        <div className="w-[80%] container mx-auto flex flex-wrap gap-3">
        {
            imageGridCards.map((foodData)=> <FoodCard key={foodData.id} foodData={foodData} />)
        }
        </div>
        </>
    )
}