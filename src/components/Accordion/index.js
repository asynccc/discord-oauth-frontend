import React, {useState} from "react";

import { IoChevronUp, IoChevronDown } from "react-icons/io5";

function Accordion( {title, children} ) {
    const [opened, setOpened] = useState(false);
    
    return (
        <div className="select-none p-7 w-full bg-[#1F2129] rounded-lg shadow-lg mt-5 cursor-pointer">
            <div className={`flex flex-row justify-between items-center text-white`}  onClick={() => setOpened(!opened)}>
                <h2 className="font-semibold text-lg">{title}</h2>
                { opened ? <IoChevronUp className="mr-5"/> : <IoChevronDown className="mr-5"/> }
            </div>
            { opened ? 
                <>
                    <div className={`flex flex-row flex-wrap justify-start cursor-default ${opened ? "open-accordion" : ""}`}>
                        {children}
                    </div>    
                </> 
            : <></>}
        </div>    
    );
}

export default Accordion;