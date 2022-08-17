import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import Card from "../Card";

import api from "../../services/api";

function Dashboard() {
  const [user, setUser] = useState();

  useEffect(() => {
    api.get("/profile/@me", { withCredentials: true })
    .then(res => {
        setUser(res.data)
    });
       
  }, []);

    return (
        <>
          <div className="p-36 flex flex-wrap flex-row items-center"> 
              { user &&
                user.guilds.filter((guild) => guild.owner).map((guild) => 
                <Card key={guild.id} serverId={guild.id}
                      icon={guild.icon}
                      name={guild.name}
                      role="Dono"/>)
              }
          </div>
        </>
    );
}

export default Dashboard;