import React from 'react'
// import Slider from 'react-touch-drag-slider'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import Link from 'next/link'
// import verticalCss from 'react-animated-slider/build/horizontal.css'

const content = [{
    'url':'/slider01.jpg',
    'tittle': 'Esto es un titulo', 
    'description':'Excursion la Habana Moderna y la Habana Vieja en una jornada. Precio total a pagar hasta 4 personas 95 Euros o 100 USD ',
    'ruta': '/servicios/guia-local/'
},
{
    'url':'/slider02.jpg',
    'tittle': 'Esto es un titulo', 
    'description':'Excursion Trinidad-Cienfuegos en dos jornadas',
    'ruta': '/servicios/guia-local/'
},
{
    'url':'/slider03.jpg',
    'tittle': 'Esto es un titulo', 
    'description':'Circuito por Cuba con descuento de hasta un 20%',
    'ruta': '/servicios/guia-local/'
}]

const Carrusel = ()=>{
    return(

	<Slider autoplay ={3000}>
    {/* // <Slider classNames={verticalCss} direction='vertical'> */}
		{content.map((article, index)=> (<div 
		key={index}
            style={{background: `url('${article.url}')no-repeat center center`}}>
		{/* <h2>{article.tittle}</h2> */}
		<h1>{article.description}</h1>
        <Link href={`${article.ruta}`}>
             <a>Leer mas...</a>
        </Link>
		</div>)
        )}
	</Slider>
    )
}

export default Carrusel

