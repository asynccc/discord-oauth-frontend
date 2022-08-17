import React from "react";

function NotFoundPage() {
    return (
        <div className="w-full h-full min-h-screen flex flex-col items-center justify-center select-none">
            <h1 className="text-4xl text-[#9195AB] animate-pulse">404</h1>
            <h2 className="text-2xl text-[#717588]">Página não encontrada</h2>
        </div>
    );
}

export default NotFoundPage;