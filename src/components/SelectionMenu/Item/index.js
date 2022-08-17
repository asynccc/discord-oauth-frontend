import React, { useState } from "react";

import { IoCheckmarkCircleOutline } from "react-icons/io5";

function Item( {content, color, onClick} ) {
    const [added, setAdded] = useState(false);

    const realColor = color === "0" ? "text-[#9B9D9F]" : `text-[#${color.toUpperCase()}]`
    console.log(realColor)

    return (
        <li className={`w-full ${realColor} cursor-pointer hover:${realColor} hover:bg-[#1d1e25] flex p-2 transition-all border border-dashed border-b-[#363744] border-t-0 border-r-0 border-l-0 last:border-b-0`}
            onClick={() => {
                onClick()
                setAdded(!added)
            }}>
            <div className="w-full flex flex-row items-center justify-betwee">
                <p className="w-full flex flex-row items-center justify-between">
                    {content}
                    { added ? <IoCheckmarkCircleOutline className="mr-5 text-emerald-400 text-xl"/> : <></> } 
                </p>
            </div>
        </li>
    );
}

export default Item;