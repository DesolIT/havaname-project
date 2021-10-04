import React,{useState, useEffect} from 'react'
import Layout from '../../../components/Layout'

const services = [{
    'imagen':'/thumb_825x329.png',
    'titulo':'Servicio de Guia Local',
    'contenido': 'Cuba es una extensa y seductora isla .Nosotros el equipo de Havaname los invitamos a unirse en nuestros tours para explorar su naturaleza, su historia, su cultura, su arte y disfrutar de unas encantadoras y merecidas vacaciones.Nuestro compromiso con los visitantes es diseñarles y ofrecerles a ustedes tours que los ayuden a descubrir las maravillas de Cuba. Carismáticos guías locales los acompañarán en las diferentes jornadas teniendo ustedes la posibilidad de interactuar con el pueblo y aprender más sobre sus verdaderas tradiciones y costumbres. Nuestras excursiones son personalizadas y adaptables, por lo que podrán visitar los lugares que sean de su interés y explorar otros con seguridad.',
    'id':1
  },
  {
    'imagen':'/alojamiento.png',
    'titulo':'Alquiler de habitaciones',
    'contenido': 'Cuba es una extensa y seductora isla .Nosotros el equipo de Havaname los invitamos a unirse en nuestros tours para explorar su naturaleza, su historia, su cultura, su arte y disfrutar de unas encantadoras y merecidas vacaciones.Nuestro compromiso con los visitantes es diseñarles y ofrecerles a ustedes tours que los ayuden a descubrir las maravillas de Cuba. Carismáticos guías locales los acompañarán en las diferentes jornadas teniendo ustedes la posibilidad de interactuar con el pueblo y aprender más sobre sus verdaderas tradiciones y costumbres. Nuestras excursiones son personalizadas y adaptables, por lo que podrán visitar los lugares que sean de su interés y explorar otros con seguridad.',
    'id':2
  },
  {
    'imagen':'/coches.png',
    'titulo':'Renta de coches',
    'contenido': 'Cuba es una extensa y seductora isla .Nosotros el equipo de Havaname los invitamos a unirse en nuestros tours para explorar su naturaleza, su historia, su cultura, su arte y disfrutar de unas encantadoras y merecidas vacaciones.Nuestro compromiso con los visitantes es diseñarles y ofrecerles a ustedes tours que los ayuden a descubrir las maravillas de Cuba. Carismáticos guías locales los acompañarán en las diferentes jornadas teniendo ustedes la posibilidad de interactuar con el pueblo y aprender más sobre sus verdaderas tradiciones y costumbres. Nuestras excursiones son personalizadas y adaptables, por lo que podrán visitar los lugares que sean de su interés y explorar otros con seguridad.',
    'id':3
  },
  {
    'imagen':'/comida.png',
    'titulo':'Alimentacion',
    'contenido': 'Cuba es una extensa y seductora isla .Nosotros el equipo de Havaname los invitamos a unirse en nuestros tours para explorar su naturaleza, su historia, su cultura, su arte y disfrutar de unas encantadoras y merecidas vacaciones.Nuestro compromiso con los visitantes es diseñarles y ofrecerles a ustedes tours que los ayuden a descubrir las maravillas de Cuba. Carismáticos guías locales los acompañarán en las diferentes jornadas teniendo ustedes la posibilidad de interactuar con el pueblo y aprender más sobre sus verdaderas tradiciones y costumbres. Nuestras excursiones son personalizadas y adaptables, por lo que podrán visitar los lugares que sean de su interés y explorar otros con seguridad.',
    'id':4
  }
  ]
const Leer = ({id})=>{
   
return(
    <>
        {services.map((s)=>parseInt(s.id)===parseInt(id) 
        ?<Layout>

            <div>
                <h1>{s.titulo}</h1>
                <img src = {s.imagen} alt={s.titulo}/>
                <p>{s.contenido}</p>
            </div>
        </Layout> 
            :console.log(''))}
    </>
)
}


export default Leer