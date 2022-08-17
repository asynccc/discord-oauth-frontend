import React, { useEffect, useState } from "react";

import { Navigate, useNavigate, useParams } from "react-router-dom";

import BoardIcon from "../../../../icons/BoardIcon/index.js";
import ConfigIcon from "../../../../icons/ConfigIcon";
import FaceIcon from "../../../../icons/FaceIcon";
import ScoreIcon from "../../../../icons/ScoreIcon/index.js";
import PassIcon from "../../../../icons/PassIcon/index.js";
import CrownColoredIcon from "../../../../icons/CrownColoredIcon/index.js";

import SidebarItemSection from "../SidebarItemSection/index.js";
import Info from "../../../Info/index.js";

import { IoChevronUp, IoChevronDown } from "react-icons/io5";

function Sidebar( {profile, guild} ) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="p-5 fixed top-0 left-0 bottom-0 min-h-screen w-94 bg-[#1F2129] border-r border-r-[#3D3E48] overflow-y-scroll no-scrollbar">
               <div className="flex flex-row items-center justify-between p-2 cursor-pointer bg-[#111218] rounded-md shadow-xl select-none"
                onClick={() => setOpen(!open)}>
                    <img src={guild.icon} className="h-9 w-9 rounded-full mt-1"/>
                    <h2 className="text-white font-semibold">{guild.name}</h2>
                    <button className="mr-5 text-white">
                        { open ? <IoChevronUp/> : <IoChevronDown/> }
                    </button>
               </div>
               { open &&
                 <GuildDropdown guilds={profile.guilds}/>
               }
               <div className="mt-10 w-full">
                  <ul className="p-2 text-[#9195AB] text-sm ">
                      <SidebarItemSection>
                        <SidebarItem icon={<BoardIcon className="mr-1 "/>} text="Dashboard"/>
                        <SidebarItem icon={<ScoreIcon className="mr-1 "/>} text="Placar de XP"/>
                        <SidebarItem icon={<FaceIcon className="mr-1 "/>} text="Custom Bot" premium={true}/>
                        <SidebarItem icon={<ConfigIcon className="mr-1 "/>} text="Configurações"/>
                        <SidebarItem icon={<PassIcon className="mr-1 "/>} text="Premium"/>
                      </SidebarItemSection>
                      <SidebarItemSection title="Ganhos">
                        <SidebarItem info="new" icon={<BoardIcon className="mr-1 "/>} text="Renda mensal"/>
                      </SidebarItemSection>
                      <SidebarItemSection title="Monetização">
                        <SidebarItem icon={<BoardIcon className="mr-1 "/>} text="Planos para usuários"/>
                      </SidebarItemSection>
                      <SidebarItemSection title="Gerenciamento de Servidor">
                        <SidebarItem info="new" icon={<BoardIcon className="mr-1 "/>} text="Boas-vindas"/>
                        <SidebarItem icon={<BoardIcon className="mr-1 "/>} text="Cargos por Reação"/>
                        <SidebarItem info="new" icon={<BoardIcon className="mr-1 "/>} text="Moderador"/>
                        <SidebarItem icon={<BoardIcon className="mr-1 "/>} text="Comandos Customizáveis"/>
                      </SidebarItemSection>
                      <SidebarItemSection title="Gerenciamento de Servidor">
                        <SidebarItem info="new" icon={<BoardIcon className="mr-1 "/>} text="Boas-vindas"/>
                        <SidebarItem icon={<BoardIcon className="mr-1 "/>} text="Cargos por Reação"/>
                        <SidebarItem info="new" icon={<BoardIcon className="mr-1 "/>} text="Moderador"/>
                        <SidebarItem icon={<BoardIcon className="mr-1 "/>} text="Comandos Customizáveis"/>
                      </SidebarItemSection>
                      <SidebarItemSection title="Gerenciamento de Servidor">
                        <SidebarItem info="new" icon={<BoardIcon className="mr-1 "/>} text="Boas-vindas"/>
                        <SidebarItem icon={<BoardIcon className="mr-1 "/>} text="Cargos por Reação"/>
                        <SidebarItem info="new" icon={<BoardIcon className="mr-1 "/>} text="Moderador"/>
                        <SidebarItem icon={<BoardIcon className="mr-1 "/>} text="Comandos Customizáveis"/>
                      </SidebarItemSection>
                      <SidebarItemSection title="Gerenciamento de Servidor">
                        <SidebarItem info="new" icon={<BoardIcon className="mr-1 "/>} text="Boas-vindas"/>
                        <SidebarItem icon={<BoardIcon className="mr-1 "/>} text="Cargos por Reação"/>
                        <SidebarItem info="new" icon={<BoardIcon className="mr-1 "/>} text="Moderador"/>
                        <SidebarItem icon={<BoardIcon className="mr-1 "/>} text="Comandos Customizáveis"/>
                      </SidebarItemSection>
                  </ul>
               </div>
            </div>
        </>
    );
}

function SidebarItem({ icon, text, premium, info }) {
    return (
        <div className="w-full cursor-pointer hover:bg-[#272934] flex flex-row items-center hover:text-white rounded-md select-none">
            {icon}
            <li className="w-full cursor-pointer p-2 flex flex-row items-center justify-between">
                <p className="ml-3 text-md font-normal">{text}</p>
                { premium ? <CrownColoredIcon /> : "" }
                { info &&
                    <Info type={Info}/>
                }
            </li>
        </div>    
    );
}


function GuildDropdown({guilds}) {
    return (
        <div className="items-center justify-between absolute w-[16.5rem] select-none">
            <div className="flex flex-col items-center p-2 justify-between bg-[#111218] mt-2 rounded-md">
            { guilds &&
                guilds.map((guild) => (
                    <GuildItem key={guild.id} guild={guild}/>
                ))
            }
            </div>
        </div>
    );
}

function GuildItem({guild}) {
    let navigate = useNavigate();

    return (
          <div className="w-full flex flex-row items-center justify-between mt-2 cursor-pointer select-none"
           onClick={() => { navigate(`/dashboard/${guild.id}`)}}>
            <img src={guild.icon} className="h-9 w-9 rounded-full"/>
            <h2 className="text-white font-semibold">{guild.name}</h2>
            <div className="mr-9 text-white"></div>
          </div>  
    );
}

export default Sidebar;