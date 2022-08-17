import React from "react";

function Section({ children, title, description, button, icon }) {
    return (
        <div className="container mx-auto">
            <div className="mx-12 mr-12 mt-12 flex flex-row justify-between items-center">
                <div className="flex flex-col">
                    <h2 className="text-[#F2F4FB] text-3xl font-bold">{title}</h2>
                    <span className="text-[#9195AB] text-sm mt-2">{description}</span>
                </div>
                <button className="flex flex-row items-center justify-between text-white bg-gray-600 p-5 rounded-md w-46 h-8 text-sm hover:bg-slate-500 transition-all">{icon} {button}</button> 
            </div>   
            <div className="m-12 mt-8 flex flex-col transition-all">
                {children}
            </div>
        </div>
    );
}

export default Section;