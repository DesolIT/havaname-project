import React from "react";
import Layout from "../../components/Layout";
import { Cell, Grid } from 'styled-css-grid';

const destinos = [{
    'imagen':'/Trinidad.png',
    'titulo':'Trinidad',
    'descripcion':'Fundada en 1514 por el conquistador Diego Velázquez es Trinidad conocida como La ciudad Museo de Cuba y del Caribe. Con excelente nivel de conservación, la antigua Villa de La Santísima Trinidad, junto a su vecino Valle de los ingenios, es Patrimonio de la Humanidad desde 1988.Sobresalen detenidos en el tiempo palacios señoriales, torres centenarias, calles adoquinadas, rejas forjadas a mano, tejas criollas, parques y plazas de una ciudad que creció con el desarrollo fundamentalmente de la pesca, el cultivo del tabaco, de frutos menores, de la caña de azúcar y el café.Lugares de interés:Plaza MayorMuseo RománticoTorre Manaca IznagaValle de Los IngeniosTopes de Collante.',
    'id':1,
},{
    'imagen':'/Varadero.png',
    'titulo':'Varadero',
    'descripcion':'Es el principal destino turístico de sol y playa que ofrece Cuba. Ocupa una longitud de 19km y sus arrecifes coralinos hacen de este destino un lugar espectacular. Hoy por hoy es muy visitado por canadienses y europeos que aprecian la blancura de su arena, sus aguas cristalinas y su complejo hotelero.Lugares a visitar:Parque Retiro JosoneMansión Xanadú:Punta Hicacos',
    'id':2,
},{
    'imagen':'/Cienfuegos.png',
    'titulo':'Cienfuegos',
    'descripcion':'Capital de la provincia del mismo nombre, Cienfuegos es una villa portuaria muy importante, su  centro histórico ha sido declarada Patrimonio Mundial de la Humanidad por la UNESCO. Situada en una de las bahías más bellas del Caribe ganó el título de La Perla del Sur. En 1494 estuvo habitada por los Indios Jagua. En 1745, los españoles construyen una importante fortaleza en la bahía para defender la villa de los ataques de corsarios y piratas. La villa de Cienfuegos fue fundada en 1819 portando el nombre del gobernador general cubano, José Cienfuegos.Lugares de interés:Castillo de JaguaParque José MartíTeatro Tomás TerryCementerio Tomás Acea.Catedral de CienfuegosPaseo del Prado',
    'id':3,
},{
    'imagen':'/Santa-Clara.png',
    'titulo':'Santa Clara',
    'descripcion':'Capital de la Provincia cubana Villa Clara. Fundada en 1689 por los pobladores de la región costera de San Juan de los Remedios. Fue allí que la batalla de Santa Clara hecho que marcó la historia de Cuba tuvo lugar. Aquí se encuentra el complejo Escultórico Ernesto Ché Guevara que cuenta con el monumento a la figura del guerrillero argentino donde descansan sus restos.Lugares a visitar:Memorial Ché Guevara Monumento Tren Blindado Parque Vidal Centro histórico',
    'id':4,
},{
    'imagen':'/Habana-Moderna.png',
    'titulo':'Habana Moderna',
    'descripcion':'Lugares de interés:allejón de Hammel: Conocido por sus murales pintados por el pintor cubano Salvador Gonzales con la presencia de símbolos y textos dedicados a los dioses y religiones africanas.Vedado: El barrio del Vedado se transformará desde su fundación en el siglo XIX en una zona residencial elegante atrayendo a las familias más adineradas.Plaza de La Revolución: Cargado de gran contenido simbólico, es el centro político de la capital y de todo el país.Necrópolis Colón: El cementerio de La Habana es uno de los más extensos del mundo con 56 hectáreas. Declarado monumento histórico.Miramar: Es el barrio más elegante de La Habana. Su arteria principal es la 5ta Avenida, extensa avenida rodeada de hermosas y majestuosas mansiones que datan del siglo XX.Finca La Vigía: Única residencia de Ernest Hemingway fuera de los Estados Unidos. Transformada en museo en 1962, un año después de su suicidio.Hotel Nacional: La institución se encuentra entre los 10 hoteles considerados Palacios del Planeta, atrayendo desde su fundación a centenas de personalidades del mundo del arte de la ciencia y la política.El colosal Cristo de La Habana: El Cristo de La Habana, estatua de mármol con 18 metros de altura que vemos prácticamente desde cualquier punto de la ciudad.',
    'id':5,
},{
    'imagen':'/Habana-Vieja.png',
    'titulo':'Habana Vieja',
    'descripcion':'El Centro urbano de La Habana Vieja y su sistema de fortificaciones fue declarado Patrimonio de la Humanidad en diciembre de 1982 en París, Francia.La antigua Villa de San Cristóbal de La Habana hay teorías de que fue fundada por vez primera en el 1514 y su segunda fundación en el 1519 alrededor de una plaza, la plaza de Armas, llamada así porque era el lugar donde las fuerzas españolas ensayaban sus ejercicios militares.Lugares de interés:Calle Obispo: Calle más transitada y popular de la Habana Vieja.Rosalía de Castro: Centro recreativo muy popular con espectáculo nocturno con Buena Vista Social Club y La show woman Juana Bacallao.Centro histórico: Declarado Patrimonio de la Humanidad por la Unesco.La Bodeguita del Medio Bar restaurante El Floridita Plaza de Armas Plaza de La Catedral Plaza Vieja Café Taberna',
    'id':6,
},{
    'imagen':'/Soroa.png',
    'titulo':'Soroa',
    'descripcion':'El Centro turístico de Soroa se encuentra en la provincia Artemisa a solo 7 km de la Autopista Nacional y a 250m sobre el nivel del mar. Soroa es un pequeño pueblo rodeado de montañas y mucha vegetación tropical. Lugares de interés:Jardín Botánico Orquidiario de Soroa: Es el mayor orquidiario de la isla. Tiene una enorme variedad de orquídeas y especies endémicas. Cuenta con una de las más extensas colecciones de orquídeas a nivel mundial con más de 600. Declarado Patrimonio Nacional.Cafetal Buena Vista: Ruinas de una antigua plantación de café francesa donde aún quedan vestigios de los antiguos barracones de los esclavos y secaderos de café. Como se encuentra en una colina podemos disfrutar de un excelente panorama de Soroa.Cascadas El Arco Iris: Cascadas de 22 m de altura conocida como El Arco Iris. Una de las mayores atracciones para los amantes de la naturaleza y la natación.Castillo de las Nubes: Bello edificio de estilo medieval transformado en un restaurante. El lugar cuenta con una hermosa vista de La Sierra del Rosario, declarado Reserva de La Biosfera.',
    'id':7,
},
    
]

const Destinos = ()=>{
    return(
        <>
        <Layout>
        <Cell>
          <Grid columns={1}>
            {destinos.map((destino) => (
              <Cell key={destino.id} width={1}>
                <img src={destino.imagen} title={destino.title}/>
                <h2>{destino.titulo}</h2>
                {`${destino.descripcion.slice(0,250)}...`}
                {/* {destino.descripcion.slice(0,50)} */}
              </Cell>
            ))}
          </Grid>
        </Cell>
        </Layout>
        </>
    )
}

export default Destinos