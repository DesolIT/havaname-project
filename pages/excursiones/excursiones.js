import Layout from "../../components/Layout";
import fetchFromStrapi from "../../lib/dest";
import Link from "next/link";
import { Cell, Grid } from "styled-css-grid";

export default function Excursion({excursionItems}){
    const apiUrl = 'http://localhost:1337'
    return(
         <Layout>
             <Grid columns={4}>
            {excursionItems.map((excursion)=>(
                <Cell key={excursion.id} width={2}>  
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
                    </Cell>
            ))}
            </Grid>
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