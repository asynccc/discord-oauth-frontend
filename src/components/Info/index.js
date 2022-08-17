import React from "react";

function Info({type}) {
    return (
        <>
        { type == "new" ?
        <p className="p-1 w-12 rounded-full text-emerald-300 bg-emerald-700 text-xs font-semibold">Novo!</p>
        : type == "modified" ?   
        <p className="p-1 rounded-full text-yellow-300 bg-yellow-700 text-xs font-semibold">Mudança!</p>
        : type == "error" ?
        <p className="p-1 rounded-full text-red-300 bg-red-700 text-xs font-semibold w-28">Bug!</p>
        :
        <div className="flex flex-row items-center justify-center h-[1.1rem] rounded-full bg-emerald-800 opacity-80">
            <p className="align-middle m-2 text-emerald-200 text-xs font-semibold">Novo!</p>  
        </div>
        }
        </>   
    );
}

export default Info;