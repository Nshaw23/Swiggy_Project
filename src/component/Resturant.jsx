import { useEffect, useState } from "react"
import React from "react"
import RestCard from "./RestCard"
import Shimmer from "./Shimmer"

export default function Resturant(){
    const [Restdata, setRestData] = useState([])

    async function FetchData(){
        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5643&lng=88.3693&is-seo-homepage-enabled=true"
        const response = await fetch(proxyServer+swiggyAPI)
        const data = await response.json()
        setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(() =>{
        FetchData()
    },[])

    if(Restdata.length==0){
        return <Shimmer/>
    }
    // console.log(Restdata)

    return (
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            {
                Restdata.map((restInfo)=><RestCard key={restInfo.info.id} restInfo={restInfo} />)
            }
        </div>
    ) 
}