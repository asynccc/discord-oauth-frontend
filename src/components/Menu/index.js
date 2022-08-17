import React, { useEffect, useState } from "react";

import api from "../../services/api";

import Section from "../Sidebar/Section";

import AccordionSection from "../../components/Sections/AccordionSection";
import CommandsSection from "../../components/Sections/CommandsSection";

import {MdChat} from "react-icons/md";
import {IoCaretForwardOutline} from "react-icons/io5";

import Sidebar from "../Sidebar/Sidebar/SidebarItem";
import Navbar from "../Navbar";
import Loading from "../Loading";

function PageSection({ params, guild }) {
  if (params.name == null) {
     return ( <Section 
              icon={<MdChat className="mr-2"/>}
              button="Servidor de Suporte"
              title="Configure plugins"
              description="Modifique nossas features como quiser!"
          >
          <AccordionSection/>
      </Section>
    )    
  } else if (params.name == "create-commands") {
      return ( <Section 
          icon={<IoCaretForwardOutline className="mr-2"/>}
          button="Voltar"
          title="Crie seus próprios comandos!"
          description="Você pode criar e editar nossos comandos existentes!"
      >
              <CommandsSection guild={guild}/>
          </Section>
      )  
  }
}

function Menu( {params, guildId} ) {
    const [profile, setProfile] = useState();
    const [guild, setGuild] = useState();
    const [loading, setLoading] = useState(true);

    const initialize = async () => {
        await api.get('/profile/@me', { withCredentials: true })
        .then(async (res) => {
          setProfile(res.data)
        })

        await api.get(`/profile/@me/guilds/${guildId}`, { withCredentials: true })
        .then(async (res) => {
          setGuild(res.data);
          setLoading(false);
        })
    }

    useEffect(() => {
      initialize()
    }, [])

    console.log(guild)

    return (
        <div className="h-full flex flex-row">
          { loading ? <Loading/> :
           <>
           { guild && profile &&
            <>
            <Sidebar profile={(profile)} guild={(guild)}/>
            <div className="w-full flex flex-col ml-[250px]">
              <Navbar profile={profile}/>
              <PageSection key={(guild.id)} guild={(guild)} params={(params)}/>
            </div>
            </>
          }
           </>
          }
        </div>
    );
}

export default Menu;