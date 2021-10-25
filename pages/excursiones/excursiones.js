// import React from "react";
// import Layout from "../../components/Layout";

import Layout from "../../components/Layout";
import fetchFromStrapi from "../../lib/dest";
import Link from "next/link";

export default function Excursion({excursionItems}){
    const apiUrl = 'http://localhost:1337'
    return(
         <Layout>
            {excursionItems.map((excursion)=>(
                // <Link as ={`/post/mostrar/${destino.slug}`} href='/post/mostrar/[id]'>
                   
                    <div>
                        <div>
                            <img src = {apiUrl + excursion.imagen.url} alt={excursion.titulo}/>
                        </div>
                        <div>
                            {excursion.imagen.created_at}
                        </div>
                        <div>
                            <h1>{excursion.titulo}</h1>
                        </div>
                        <div>
                            <p>{`${excursion.descripcion.slice(0,250)}...` }</p>
                        </div>
                        
                    <Link href={`/excursiones/mostrar/${excursion.slug}`}>
                        <a>Seguir leyendo...</a>
                    </Link>
                    </div>
            ))}
       </Layout>

    )
}
export async function getStaticProps(){
    const excursionItems = await fetchFromStrapi('excursions');
    return{
        props:{excursionItems},
        revalidate:1,
    };
}