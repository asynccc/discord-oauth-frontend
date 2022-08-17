import React, { useEffect, useState } from "react";
import Accordion from "../../Accordion";
import Item from "../../SelectionMenu/Item";
import Selection from "../../SelectionMenu/Selection";

import { IoBanSharp } from "react-icons/io5";

function CommandsSection({ guild }) {
  const [prefix, setPrefix] = useState('');
  const [roles, setRoles] = useState([]);

  const filled = prefix.replace("!", "") == "" && roles.length === 0

  return (
    <>
      <button className={`p-2 bg-sky-600 text-white font-semibold w-1/6 rounded-lg hover:ring-1 hover:transition-all hover:ring-sky-500 ${prefix === "" ? "cursor-not-allowed" : "cursor-pointer"}`} 
             disabled={filled}
             >
            Salvar
      </button>
      { filled ? <span className="animate-pulse transition-all flex flex-row items-center justify-between p-3 mt-5 text-white rounded-md border border-red-500">Alguma lacuna está vazia, certifique-se de preencher tudo! <IoBanSharp className="mr-5 text-red-200"/></span> : <> </> }
      <Accordion title="Crie um comando!">
        <div className="p-6 w-full ">
          <form className="flex flex-col text-white">
            <label className="block text-slate-300 opacity-40 text-sm mb-2">
              Template
            </label>
            <input
              type="text"
              className="bg-[#14151b] border border-[#14151b] text-white p-3 w-1/2 opacity-70 cursor-not-allowed bg-transparent rounded-lg shadow-md appearance-none leading-tight focus:outline-none focus:shadow-outline focus:border "
              placeholder="Template"
            />
            <label className="block text-slate-300 opacity-40 text-sm mt-4 mb-2">
              Prefixo
            </label>
            <input
              type="text"
              className="bg-[#14151b] border border-[#14151b] text-white font-semibold p-3 w-1/2 bg-transparent rounded-lg shadow-md appearance-none leading-tight focus:outline-none hover:shadow-outline hover:border hover:border-emerald-600 focus:outline-2 focus:outline-emerald-800"
              placeholder="Digite um prefixo para o comando"
              value={`!${prefix.replace("!", "")}`}
              onInput={(e) => setPrefix(e.currentTarget.value)}
            />
          </form>
        </div>
      </Accordion>
      <Accordion title="Permissões">
        <div class="w-full">
          <div>
            <h2 className="text-white opacity-40 mt-7">
              Cargo que será permitido o uso do comando
            </h2>
            <Selection title="Selecione um cargo">
              {guild &&
                guild.roles
                  .filter((role) => role.name !== "@everyone")
                  .map((role) => (
                    <Item key={role.name}
                          color={role.color}
                          content={`@${role.name}`}
                          onClick={() => {
                             removeOrAdd(roles, role.name)
                          }}
                    />
                  ))
                  }

              { guild &&
                console.log(guild.roles)
              }    
            </Selection>
          </div>
        </div>
      </Accordion>
    </>
  );
}

function removeOrAdd(roles, name) {
    if (roles.includes(name)) {
        const index = roles.indexOf(name);

        if (index > -1) {
            roles.splice(index, 1)
        }
    } else {
        roles.push(name)
    }
}

export default CommandsSection;
