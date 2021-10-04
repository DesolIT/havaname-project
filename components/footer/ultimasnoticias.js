import React from 'react'
import Formulario from './Formulario'

const UltimasNoticias = ()=>{
    return(
        <>
        <div>
            <div>
                <h2>Últimas noticias</h2>
            </div>
                <p>Suscribase para noticias</p>
        <div>
            <Formulario />
        </div>
        <div>
            <h2>Contáctanos</h2>
        </div>  
        <address>
            'Telefono: (+53) 54421959'
            <br></br>
            'Correo Elecronico:'
            <a href='mailto:alexeirmrz3@gmail.com' title='alexei mail contact'>Contactar a Alexei</a>
        </address>
            <div className='headline'>
                <h2>Mantenerse Conectado</h2>
            </div>
        </div>

        </>
    )
}

export default UltimasNoticias