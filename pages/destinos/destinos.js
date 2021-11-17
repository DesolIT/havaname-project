import fetchFromStrapi from "../../lib/dest"
import Link from "next/link";
import Layout from "../../components/Layout";
import { Cell, Grid } from "styled-css-grid";
import Aside from "../../components/AsideBar/aside";

export default function Destinos({destinoItems}){
    const apiUrl = 'http://localhost:1337'
    return(
         <Layout>
            <Grid columns={2}>

            <Aside />
            
            {destinoItems.map((destino)=>(
                <Cell key={destino.id} width={1}> 
                    <div>
                        <div>
                            <img src = {apiUrl + destino.imagen.url} alt={destino.titulo}/>
                        </div>
                        <div>
                            {destino.imagen.created_at}
                        </div>
                        <div>
                            <h1>{destino.titulo}</h1>
                        </div>
                        <div>
                            <p>{`${destino.descripcion.slice(0,250)}...` }</p>
                        </div>
                        
                    <Link href={`/post/mostrar/${destino.slug}`}>
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
    const destinoItems = await fetchFromStrapi('destinos');
    return{
        props:{destinoItems},
        revalidate:1,
    };
}

       
        
        