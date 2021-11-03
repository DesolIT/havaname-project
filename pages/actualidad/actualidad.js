import Link from "next/link";
import { Cell, Grid } from "styled-css-grid";
import Layout from "../../components/Layout";
import fetchFromStrapi from "../../lib/dest";

export default function Actualidad({actualidadItems}){
    const apiUrl = 'http://localhost:1337'
    return(
         <Layout>
             <Grid columns={4}>
            {actualidadItems.map((actualidad)=>(
                // <Link as ={`/post/mostrar/${destino.slug}`} href='/post/mostrar/[id]'>
                <Cell key={actualidad.id} width={2}>  
                    <div>
                        <div>
                            <img src = {apiUrl + actualidad.imagen.url} alt={actualidad.titulo}/>
                        </div>
                        <div>
                            {actualidad.imagen.created_at}
                        </div>
                        <div>
                            <h1>{actualidad.titulo}</h1>
                        </div>
                        <div>
                            <p>{`${actualidad.descripcion.slice(0,250)}...` }</p>
                        </div>
                        
                    <Link href={`/actualidad/mostrar/${actualidad.slug}`}>
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
    const actualidadItems = await fetchFromStrapi('actualidads');
    return{
        props:{actualidadItems},
        revalidate:1,
    };
}