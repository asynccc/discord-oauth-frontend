import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'

import App from "../../App";
import Dashboard from "../Dashboard";
import MenuRouter from "../Routes/Menu";
import NotFoundPage from "../../pages/NotFoundPage";

function PagesRouter() {
    return (
        <Routes>
            <Route index element={<App/>}/>
            <Route path="servers" element={<Dashboard/>}/>
            <Route path="dashboard/:id" element={<MenuRouter/>}/>
            <Route path="dashboard/:id/:name" element={<MenuRouter/>}/>
            <Route path="*" element={<NotFoundPage/>}/>    
        </Routes>
    );
}

export default PagesRouter;