import React, { useState, useEffect } from "react";

import {MdExpandMore, MdExpandLess} from "react-icons/md";

function Selection({title, children}) {
    const [opened, setOpened] = useState(false);

    return (
        <div className="flex flex-col mr-56 mt-5 w-1/2">
            <div className="p-8 h-26 bg-[#181a20] rounded-lg border-b-2 border-b-[#1c1d25] shadow-xl">
               <div className="flex flex-row items-center justify-between p-2 text-[#9B9D9F] bg-[#1e2027] rounded-md cursor-pointer w-full shadow-xl hover:text-white" onClick={() => setOpened(!opened)}> 
                <h3 className="ml-4 ">{title}</h3>
                <div className="p-1 border border-[#454a5f] border-dashed border-r-0 border-t-0 border-b-0">
                    { !opened ?
                        <MdExpandMore className="text-[#9B9D9F] ml-2 mr-3"/> 
                        :
                        <MdExpandLess className="text-[#9B9D9F] ml-2 mr-3"/>
                    }
                </div>
               </div>
               <ul className={`mt-5 w-full bg-[#1e2029] rounded-lg flex flex-col shadow-xl border-b-2 border-b-[#1c1d25] overscroll-auto overflow-y-scroll no-scrollbar ${opened ? "open" : "close hidden"}`}>
                  {children}
               </ul>
            </div>
        </div>
    );
}

export default Selection;