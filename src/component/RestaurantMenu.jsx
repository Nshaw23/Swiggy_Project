import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import MenuCard from "./MenuCard"
import { Link } from "react-router"

export default function RestaurantMenu(){

    let {id} = useParams()

    const [Restdata, setRestData] = useState([])
    const [selected, setSelected] = useState(null)

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

    return(

        <div>

            <div className="w-[80%] mx-auto mt-20 mb-20">
                <Link to={`/city/kolkata/${id}/search`}>
                <p className="w-full text-center py-4 bg-gray-200 text-2xl rounded-4xl">Search for Dishes</p>
                </Link>
            </div>

            <div className="w-[80%] mx-auto mt-20 mb-20">
            <button className={`text-2xl py-2 px-8 mr-4 border rounded-2xl ${selected==="veg"?"bg-green-600":"bg-gray-300"}`} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
            <button className={`text-2xl py-2 px-4 border rounded-2xl ${selected==="nonveg"?"bg-red-600":"bg-gray-300"}`} onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>Non Veg</button>
        </div>

        <div className="w-[80%] mx-auto mt-20">
            {
                Restdata.map((menuItems)=> <MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodselected={selected}></MenuCard>)
            }
        </div>
        </div>
    )
}