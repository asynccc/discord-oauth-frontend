import React, { useState, useEffect } from 'react'


import { FaCrown, FaHeart, FaFlask, FaDiceD6, FaPlay, FaTrophy } from "react-icons/fa";
import { IoChevronUp, IoChevronDown } from 'react-icons/io5';
import { BiCheck } from "react-icons/bi";

import logo from "./assets/logo.png";
import slash from "./assets/slash.svg";
import background from "./assets/background.svg";
import welcome from "./assets/welcome.png";
import commandsbg from "./assets/commandsbg.png";
import vines from "./assets/vines.svg";

import minecraft from "./assets/partner/minecraft.png";
import roblox from "./assets/partner/roblox.png";
import pubg from "./assets/partner/pubg.png";
import mrbeast from "./assets/partner/mrbeast.png";
import melon from "./assets/partner/melon.png";
import nba from "./assets/partner/nba.png";

import Dropdown from './components/Dropdown/Section';
import DropdownItem from './components/Dropdown/Item';
import SettingsDropdown from './components/SettingsDropdown/Base';
import SettingsDropdownSection from './components/SettingsDropdown/Section';
import SettingsDropdownItem from './components/SettingsDropdown/Item';

import api from "./services/api";

function App() {
  const REDIRECT_URL = 'http://localhost:8080/oauth2/authorization/discord'

  const [showDropdown, setShowDropdown] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [user, setUser] = useState();

  const [animation, setAnimation] = useState('open')
  const [settingsAnimation, setSettingsAnimation] = useState('open')

  useEffect(() => {
    api.get("/profile/@me", {withCredentials: true})
    .then(res => {
        setUser(res.data)
    });
       
  }, []);

  const handleAnimation = async () => {
    if (showDropdown) {
      setAnimation('close')
      setTimeout(50)
      setShowDropdown(false)
  } else {
      setAnimation('open')
      setShowDropdown(true)
  }
}

  const handleSettings = async () => {
     if(showSettings) {
      setSettingsAnimation('close')
      setTimeout(50)
      setShowSettings(false)
     } else {
      setSettingsAnimation('open')
      setShowSettings(true)
     }
  }

  return (
    <div>
      <img
        src={background}
        className="absolute left-[250px] mt-60 w-[1100px]"
      />
      <div className="p-4 flex flex-col md:flex-row items-center justify-between">
        <img src={logo} className="w-52 ml-10" />
        <ul className="px-12 py-2 flex flex-row items-center justify-end text-sm select-none">
            <li
              className="px-5 my-3 relative flex flex-row items-center"
              onClick={() => handleAnimation()}
            >
              <p className='text-[#9B9D9F] hover:text-white cursor-pointer flex flex-row items-center'>Plugins { showDropdown ? <IoChevronUp className='ml-3'/> : <IoChevronDown className='ml-3'/> }</p>
              <div>
                {showDropdown && (
                  <Dropdown animation={animation}>
                    <DropdownItem
                      redirect="home"
                      title="Moderação & gerenciamento"
                      icon={<FaFlask className="mr-2 text-sky-400" />}
                      description="Boas vindas, Comandos Customizados, Reação, Cargos, Moderação."
                    />
                    <DropdownItem
                      redirect="home"
                      title="Utilidades"
                      icon={<FaDiceD6 className="mr-2 text-sky-400" />}
                      description="Embeds, Procure qualquer coisa, Gravações, Temporizadores, Estatísticas."
                    />
                    <DropdownItem
                      redirect="home"
                      title="Conectores Sociais"
                      icon={<FaPlay className="mr-2 text-sky-400" />}
                      description="Conexões com Twitch, Twitter, YouTube & Reddit."
                    />
                    <DropdownItem
                      redirect="home"
                      title="Engajamento & Diversão"
                      icon={<FaTrophy className="mr-2 text-sky-400" />}
                      description="Níveis, Aniversários, Música, Quiz, Plugin de economia."
                    />
                  </Dropdown>
                )}
              </div>
            </li>
          <li className="px-5 py-2 my-3 text-[#9B9D9F] hover:text-white cursor-pointer">
            Membership
          </li>
          <li className="px-5 py-2 my-3 text-[#9B9D9F] hover:text-white cursor-pointer">
            Custom bot
          </li>
          <li className="px-5 py-2 my-3 text-[#9B9D9F] hover:text-white cursor-pointer">
            Servidor de Suporte
          </li>
          <li className="px-5 py-2 my-3 text-[#9B9D9F] hover:text-white cursor-pointer">
            Tutoriais
          </li>
          <li className="px-5 py-2 my-3 text-[#FFC34F] hover:text-white cursor-pointer flex flex-row items-center">
            <FaCrown className="mr-2" /> Premium
          </li>
          <li className="px-5 my-3 relative" onClick={() => handleSettings()}>
            <div className='cursor-pointer'>
              { user ?
               <>
               <img src={user.avatar} className="h-8 w-8 rounded-full mt-1" /> 
               { showSettings &&
                 <SettingsDropdown animation={settingsAnimation}>
                  <SettingsDropdownSection title="FREEDOM">
                     <SettingsDropdownItem link="" text="Cartão pessoal de rank" />
                     <SettingsDropdownItem link="" text="Pro" />
                     <SettingsDropdownItem link="" text="Memberships" />
                  </SettingsDropdownSection>
                  <SettingsDropdownSection title="DONO DE SERVIDORES">
                     <SettingsDropdownItem link="servers" text="Meus servidores"/>
                     <SettingsDropdownItem link="" icon={<FaCrown className="mr-2 text-yellow-400 ml-[-22px]"/>} text="Transferir premium" />
                     <SettingsDropdownItem link="" text="Gerenciar passe NFT" />
                  </SettingsDropdownSection>
                  <SettingsDropdownSection title="PAGAMENTO">
                     <SettingsDropdownItem link="" text="Fatura" />
                  </SettingsDropdownSection>
                  <SettingsDropdownSection title="OUTROS">
                     <SettingsDropdownItem link="" text="Deslogar"/>
                     <SettingsDropdownItem link="" text="Sessões"/>
                  </SettingsDropdownSection>
                </SettingsDropdown>
               }
               </>
               :
               <a href={REDIRECT_URL} className="px-5 py-2 rounded-lg text-white cursor-pointer bg-sky-500 hover:bg-sky-600">
                 Login
               </a>
              }
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col p-20">
        <h1 className="text-white text-6xl font-bold max-w-[500px]">
          Construa o melhor Servidor do Discord
        </h1>
        <span className="my-5 text-[#9B9D9F] max-w-[350px]">
          Configure moderação, níveis, alertas da Twitch, e muito mais com nossa
          central de controles super simplificada!
        </span>
        <img src={slash} className="w-16" />
        <ul className="flex flex-col justify-between text-[#9B9D9F] py-5 text-sm">
          <li className="flex flex-row items-center mb-2">
            <BiCheck size={25} className="text-[#57CF7B] mr-2" /> Moderação
          </li>
          <li className="flex flex-row items-center mb-2">
            <BiCheck size={25} className="text-[#57CF7B] mr-2" /> Comandos
            customizados
          </li>
          <li className="flex flex-row items-center mb-2">
            <BiCheck size={25} className="text-[#57CF7B] mr-2" /> Cargos
            reativos
          </li>
          <li className="flex flex-row items-center mb-2">
            <BiCheck size={25} className="text-[#57CF7B] mr-2" /> Alertas de
            Twitch, Youtube e Twitter
          </li>
        </ul>
        <div className="flex flex-row">
          <button className="px-9 py-3 rounded-lg text-white cursor-pointer bg-sky-500">
            Adicionar ao Discord
          </button>
          <button className="px-9 py-3 rounded-lg text-white cursor-pointer bg-[#3D3E48] ml-4">
            Ver Recursos
          </button>
        </div>
      </div>
      <div className="sticky flex flex-row items-center justify-between bg-[#1F2129] p-10 mt-[3.4rem] text-white font-bold w-full">
        <h2 className="text-2xl ml-10">Usado por 18+ milhões de servidores</h2>
        <ul className="flex flex-row items-center justify-end">
          <li>
            <img src={minecraft} className="w-16 ml-5" />
          </li>
          <li>
            <img src={roblox} className="w-16 ml-5" />
          </li>
          <li>
            <img src={pubg} className="w-16 ml-5" />
          </li>
          <li>
            <img src={mrbeast} className="w-16 ml-5" />
          </li>
          <li>
            <img src={melon} className="w-16 ml-5" />
          </li>
          <li>
            <img src={nba} className="w-16 ml-5" />
          </li>
        </ul>
      </div>
      <div className="flex flex-row p-10 ml-10 mt-28">
        <div className="flex flex-col">
          <h1 className="pt-24 text-white text-4xl font-bold max-w-[500px]">
            Diga olá para os novos usuários no seu servidor do Discord
          </h1>
          <span className="mt-5 text-[#9B9D9F] max-w-[450px]">
            Aproveite a mensagem de boas-vindas para informar os recém-chegados
            sobre as regras do servidor, tópicos ou eventos em andamento. Você
            pode criar seu próprio cartão de boas-vindas ou mantê-lo simples.
          </span>
          <div className="mt-6">
            <button className="mt-4 px-9 py-3 rounded-lg text-white cursor-pointer bg-sky-500 hover:bg-sky-600">
              Comece a acolher novos usuários
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-end p-10 ml-20">
          <img src={welcome} className="w-[660px]" />
        </div>
      </div>
      <div className="flex flex-row justify-between items-start p-10 mt-28 ml-10">
        <img src={commandsbg} className="w-[660px]" />
        <div className="flex flex-col justify-center">
          <h1 className="pt-24 text-white text-4xl font-bold max-w-[500px]">
            Crie facilmente seus próprios comandos personalizados
          </h1>
          <span className="mt-5 text-[#9B9D9F] max-w-[450px]">
            Freedom lhe dá controle total para criar o comando dos seus sonhos!
            Crie comandos que automaticamente dão e removem funções e enviam
            mensagens nos canais atuais ou no DM do usuário.
          </span>
          <div className="flex flex-row justify-start">
            <button className="mt-10 p-4 px-12 text-[#9B9D9F] hover:text-white border border-[#9B9D9F] rounded-lg">
              Mais sobre gerenciamento
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between bg-[#1F2129] p-20 mt-[7rem] text-white w-full">
        <img
          src={vines}
          className="mt-[-80px] absolute items-center h-[328px] w-full"
        />
        <h1 className="text-white text-4xl font-bold text-center">
          Personalize seu próprio servidor<br></br> hoje de graça
        </h1>
        <button className="mt-8 px-5 py-4 rounded-lg text-white cursor-pointer bg-sky-500 hover:bg-sky-600">
          Adicionar ao Discord
        </button>
      </div>
      <footer>
        <div className="mt-24 p-10 ml-10 flex flex-row justify-between">
          <div className="flex flex-col items-start justify-between">
            <img src={logo} className="w-52 ml-[-30px]" />
            <span className="text-[#9B9D9F] max-w-[260px] text-[14px] mb-14">
              O melhor bot Discord para começar e fazer seu servidor Discord
              crescer!
            </span>
            <span className="text-[#555762] flex flex-row items-center text-[16px] font-semibold">
              Copyright © 2022 - by Async
              <a href='https://jvictor.dev'>
                <FaHeart className="ml-2 text-red-500 hover:text-sky-400 cursor-pointer" />
              </a>
            </span>
          </div>
          <div className="flex flex-row text-white">
            <div className="flex flex-col">
              <p>Plugins</p>
              <ul className="mr-28 text-[#9B9D9F] text-[14px]">
                <li className="mt-5 hover:text-sky-400 cursor-pointer">
                  Gerenciamento de servidor
                </li>
                <li className="mt-4 hover:text-sky-400 cursor-pointer">
                  Utilidades
                </li>
                <li className="mt-4 hover:text-sky-400 cursor-pointer">
                  Conexões sociais
                </li>
                <li className="mt-4 hover:text-sky-400 cursor-pointer">
                  Engajamento & Diversão
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <p>Freedom</p>
              <ul className="mr-28 text-[#9B9D9F] text-[14px]">
                <li className="mt-5 hover:text-sky-400 cursor-pointer text-[#FFC34F] flex flex-row items-center">
                  <FaCrown className="mr-2" /> Premium
                </li>
                <li className="mt-4 hover:text-sky-400 cursor-pointer">
                  Bot Customizado
                </li>
                <li className="mt-4 hover:text-sky-400 cursor-pointer">
                  Servidor de Suporte
                </li>
                <li className="mt-4 hover:text-sky-400 cursor-pointer">
                  Portal de Suporte
                </li>
                <li className="mt-4 hover:text-sky-400 cursor-pointer">
                  Contato para Suporte
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <p>Empresa</p>
              <ul className="mr-[4rem] text-[#9B9D9F] text-[14px]">
                <li className="mt-5 hover:text-sky-400 cursor-pointer">
                  Carreiras
                </li>
                <li className="mt-4 hover:text-sky-400 cursor-pointer">
                  Termos de uso
                </li>
                <li className="mt-4 hover:text-sky-400 cursor-pointer">
                  Políticas de privacidade
                </li>
                <li className="mt-4 hover:text-sky-400 cursor-pointer">
                  Contato
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
