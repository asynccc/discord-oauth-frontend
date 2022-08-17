import React, { useEffect, useState } from "react";
import Menu from "../../Menu";

import { useParams } from "react-router-dom";

function MenuRouter() {
    const params = useParams();

    return (
        <Menu key={params.id} params={params} guildId={params.id}/>    
    );
}

export default MenuRouter;