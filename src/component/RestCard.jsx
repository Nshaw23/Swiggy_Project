import React from "react";
import Resturant from "./Resturant";
import RatingIcon from "../Icons/RatingIcon";
import { Link } from "react-router";

export default function RestCard({restInfo}) {

    return (
        <Link to={"/city/kolkata/"+restInfo?.info?.id}>
        <div className="max-w-[280px] transform transition duration-200 hover:scale-95">
            <img className="w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo.info.cloudinaryImageId}></img>
            <div className="w-[95%] mx-auto mt-1">
                <div className="font-bold text-xl">{restInfo?.info?.name}</div>
               
                <div className="flex items-center gap-2">
                <RatingIcon></RatingIcon>
                    <span className="text-lg">{restInfo?.info?.avgRating}</span>
                    <span className="text-lg font-bold">{restInfo?.info?.sla?.slaString}</span>
                    
                </div>

                <div className="text-gray-600 text-xl h-7 mt-1 flex overflow-hidden">{restInfo?.info.cuisines.join(" ")}</div>
            </div>
        </div>
        </Link>
    )
}