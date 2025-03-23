import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router"

export default function RestHeader(){

    const counter = useSelector(state=> state.cartslice.count)

    return(
        <div className="flex w-[80%] justify-between items-center container mx-auto py-4 px-8 bg-gray-200 text-5xl">
            <div>
                <p className="text-orange-300 font-bold">Swiggy</p>
            </div>
            <div>
                <Link to="/Checkout">
                <p>Cart: {`(${counter})`}</p>
                </Link>
            </div>
        </div>
    )
}