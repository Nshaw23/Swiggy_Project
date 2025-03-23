import React from "react";
import DineOption from "./DineOption";

export default function DineCard({RestData}){

    return (
        <div className="max-w-sm flex-none">
            <a target="_blank" href={RestData?.cta?.link}>
            <div className="relative w-80">
                <img className="w-full h-50 object-cover"src={"https://media-assets.swiggy.com/swiggy/image/upload/" +RestData?.info?.mediaFiles[0]?.url}/>

  
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent" />
  
                    <p className="absolute bottom-4 left-4 text-white text-xl z-10">
                        {RestData?.info?.name}
                    </p>
                    <p className="absolute bottom-4 right-4 text-white text-xl z-10">
                        {RestData?.info?.rating?.value}
                    </p>

                </div>
                </a>
        </div>
    )
}