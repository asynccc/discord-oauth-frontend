import React, { useState } from "react";
import HandIcon from "../../icons/HandIcon";
import RadioButton from "../RadioButton";

import Info from "../Info";
import { useNavigate } from "react-router-dom";

function ConfigItem({ redirectTo, title, description, isNew }) {
    const [enabled, setEnabled] = useState(false);

    let navigate = useNavigate();
  
    return (
        <div className="w-full md:w-1/3">
            <div className={`mr-5 mt-5 p-5 w-72 ${enabled ? "bg-[#313442] cursor-pointer" : "bg-[#2c2e3a] opacity-30 cursor-not-allowed"} shadow-lg rounded-md`}
                 onClick={() => enabled ? navigate(redirectTo) : {}}>
              <div className="flex flex-row items-center justify-between relative">
                <HandIcon/>
                <RadioButton action={() => setEnabled(!enabled)}/>
              </div>    
              <div className="flex flex-col">
                <h3 className="text-white font-semibold text-base flex flex-row items-center justify-between">{title} {isNew ? <Info/> : ""}</h3>
                <span className="text-[#9195AB] text-sm mt-2">{description}</span>
              </div>
            </div>
        </div>
    );
}

function LoadingConfig() {
    return (
      <div className="w-full md:w-1/3 cursor-not-allowed">
            <div className={`mr-5 mt-5 p-5 w-72 bg-[#313442] shadow-lg rounded-md animate-pulse`}>
              <div className="flex flex-row items-center justify-between relative cursor-not-allowed">
                <HandIcon/>
                <RadioButton/>
              </div>    
              <div className="flex flex-col">
                <div className="w-full h-5 bg-[#454963] rounded-lg font-semibold text-base flex flex-row items-center justify-between"></div>
                <div className="w-1/2 h-4 bg-[#555a77] rounded-lg text-sm mt-2 p-1"></div>
              </div>
            </div>
        </div>
    );
}

export default ConfigItem;