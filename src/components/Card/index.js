import React from "react";
import { Link } from "react-router-dom";

function Card({ serverId, icon, name, role }) {
    return (
        <div className="flex flex-col items-start mr-10">
            <div className="px-28 py-10 bg-[#1F2129] rounded-lg relative">
                <img src={icon} className="border-[#555762] border-2 h-[4.6rem] w-[4.6rem] rounded-full mt-1"/>
            </div>

            <div className="w-full flex flex-row mt-5 mb-10 justify-between">
                <div>
                    <h3 className="font-medium text-white">{name}</h3>
                    <h4 className="text-[#9B9D9F]">{role}</h4>
                </div>

                <button className="py-3 px-8 ml-20 bg-sky-600 hover:bg-sky-700 rounded-xl text-white">
                    <Link to={`/dashboard/${serverId}`}>Go</Link>
                </button>
            </div>     
        </div>
    );
}

export default Card;