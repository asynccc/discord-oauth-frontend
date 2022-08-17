import React from "react";
import Accordion from "../../Accordion";
import ConfigItem from "../../ConfigItem";
import Selection from "../../SelectionMenu/Selection";

function AccordionSection() {
   return (
     <>
       <Accordion title={"Personalize comandos"}>
         <ConfigItem
           redirectTo="create-commands"
           title="Comandos Personalizados"
           description="Você pode criar comandos personalizados para diversas funções."
         />
         <ConfigItem
           redirectTo="edit-cmds"
           title="Editar comandos já existentes"
           description="Você pode editar a função de nossos comandos já existentes."
         />
         <ConfigItem
           redirectTo="commands-permission"
           title="Editar permissões de comandos"
           description="Edite permissões para utilizar seus comandos."
         />
         <ConfigItem
           redirectTo="commands-args"
           title="Editar argumentos de comandos"
           description="Você consegue editar os argumentos necessários de comandos."
         />
         <ConfigItem
           redirectTo="slash-commands"
           title="Slash Commands!"
           description="Você agora consegue criar seus próprios slash commands!"
           isNew={true}
         />
       </Accordion>
       <Accordion title={"Passe individual para membros"}>
         <ConfigItem
           redirectTo="custom-cmds"
           title="Comandos Personalizados"
           description="Você pode criar comandos personalizados para diversas funções."
         />
         <ConfigItem
           redirectTo="edit-cmds"
           title="Editar comandos já existentes"
           description="Você pode editar a função de nossos comandos já existentes."
         />
         <ConfigItem
           redirectTo="commands-permission"
           title="Editar permissões de comandos"
           description="Edite permissões para utilizar seus comandos."
         />
         <ConfigItem
           redirectTo="commands-args"
           title="Editar argumentos de comandos"
           description="Você consegue editar os argumentos necessários de comandos."
         />
         <ConfigItem
           redirectTo="slash-commands"
           title="Slash Commands!"
           description="Você agora consegue criar seus próprios slash commands!"
           isNew={true}
         />
       </Accordion>
       <Accordion title={"Cargos por reações"}>
         <ConfigItem
           redirectTo="create-commands"
           title="Comandos Personalizados"
           description="Você pode criar comandos personalizados para diversas funções."
         />
         <ConfigItem
           redirectTo="edit-cmds"
           title="Editar comandos já existentes"
           description="Você pode editar a função de nossos comandos já existentes."
         />
         <ConfigItem
           redirectTo="commands-permission"
           title="Editar permissões de comandos"
           description="Edite permissões para utilizar seus comandos."
         />
         <ConfigItem
           redirectTo="commands-args"
           title="Editar argumentos de comandos"
           description="Você consegue editar os argumentos necessários de comandos."
         />
         <ConfigItem
           redirectTo="slash-commands"
           title="Slash Commands!"
           description="Você agora consegue criar seus próprios slash commands!"
           isNew={true}
         />
       </Accordion>
       <Accordion title={"Moderação personalizada"}>
         <ConfigItem
           redirectTo="create-commands"
           title="Comandos Personalizados"
           description="Você pode criar comandos personalizados para diversas funções."
         />
       </Accordion>
     </>
   ); 
}

export default AccordionSection;