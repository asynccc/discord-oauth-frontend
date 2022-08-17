import React from "react";

function SidebarItemSection({title, children}) {
    return (
        <div className="flex flex-col items-start select-none">
            <h3 className={`${title == null ? "" : "mt-5 mb-3"} text-[0.65rem] uppercase font-bold text-white`}>{title}</h3>
            {children}
        </div>
    );
}

export default SidebarItemSection;