import React from "react";
import CrownColoredIcon from "../../icons/CrownColoredIcon";
import SearchIcon from "../../icons/SearchIcon";

function Navbar({profile}) {
    return (
        <div className="flex flex-row items-center justify-between w-full h-24 bg-[#1F2129]">
            <div className="p-2 rounded-lg ml-10 flex flex-row">
              <SearchIcon margin={5}/>  
              <input type={"search"} className="bg-[#1F2129]" placeholder="Pesquise algo..."></input>
            </div>
            <div className="cursor-pointer">
                <div className="flex flex-row items-center justify-between">
                    <button className="flex flex-row items-center p-3 text-sm bg-yellow-800 bg-opacity-30 text-yellow-600 h-9 rounded-md mr-8 hover:bg-opacity-50"><p className="mr-2">Desbloquear Premium</p> <CrownColoredIcon/></button>
                    <img src={profile.avatar} className="h-10 w-10 rounded-full mr-10"/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;