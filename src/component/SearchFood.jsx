import React, { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function SearchFood(){
    const [food, setFood] = useState("")
    const [Restdata, setRestData] = useState([])

    const {id} = useParams()

    useEffect(() =>{
            async function fetchData() {
                
                const proxyServer = "https://cors-anywhere.herokuapp.com/"
                const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5643&lng=88.3693&restaurantId=${id}`
                const response = await fetch(proxyServer+swiggyAPI)
                const data = await response.json()
                const tempData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                const filterData = tempData.filter((items)=> 'title' in items?.card?.card)
                setRestData(filterData)
            }
            fetchData()
        },[])
console.log(Restdata)
    return(
    <div className="w-[80%] mx-auto mt-20">
        <input className="w-full pl-10 py-4 text-2xl rounded-2xl border bg-gray-300" placeholder="Search here" onChange={(e)=>setFood(e.target.value)}></input>
    </div>
    
    )
}