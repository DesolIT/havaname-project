import React from "react";
import Servicios from "../components/CServicios/servicios";
import Link from "next/link";
import router from "next/router";

const services = [{
  'imagen':'/yuca.png',
  'titulo':'Servicio de Guia Local',
  'id':1
},
{
  'imagen':'/alojamiento.png',
  'titulo':'Alquiler de habitaciones',
  'id':2
},
{
  'imagen':'/coches.png',
  'titulo':'Renta de coches',
  'id':3
},
{
  'imagen':'/comida.png',
  'titulo':'Alimentacion',
  'id':4
}
]
  
  

const Inicio = ()=>{
    return(
      <>
      
      <div class="col-md-12">
        <div class="headline text-center">
            <h2>Sobre nosotros</h2>
      </div>
      <p class="text-justify text-italic">
        Cuba es una extensa y seductora isla .Nosotros el equipo de Havaname
        los invitamos a unirse en nuestros tours para explorar su naturaleza,
        su historia, su cultura, su arte y disfrutar de unas encantadoras y 
        merecidas vacaciones.Nuestro compromiso con los visitantes es diseñarles
        y ofrecerles a ustedes tours que los ayuden a descubrir las maravillas de
        Cuba. Carismáticos guías locales los acompañarán en las diferentes jornadas
        teniendo ustedes la posibilidad de interactuar con el pueblo y aprender
        más sobre sus verdaderas tradiciones y costumbres. Nuestras excursiones
        son personalizadas y adaptables, por lo que podrán visitar los lugares
        que sean de su interés y explorar otros con seguridad.
      </p>
    <h3 class="text-center">
        ¡No espere más, Reserve ya!
    </h3>
      
    <div>
      {
        services.map(ser=>
          <div>
           <Link  href={`/servicios/mostrar/${ser.id}`}>
             <a>
              <Servicios imagen= {ser.imagen} titulo= {ser.titulo}/>
             </a>
           </Link> 
          </div>
        )
      }
    </div>
    </div>
      </>

    )
}

export default Inicio
             
        
    
            
          
          
                    

                