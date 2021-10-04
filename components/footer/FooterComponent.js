import React from "react";
import CardAdvisor from "./CardAdvisor";
import EntradasRecientes from "./EntradasRecientes";
import UltimasNoticias from "./ultimasnoticias";

const FooterComponent = ()=>{
    return(
        <div className='footer'>
            <UltimasNoticias />
            <EntradasRecientes />
            <CardAdvisor />
        </div>
    )
}

export default FooterComponent