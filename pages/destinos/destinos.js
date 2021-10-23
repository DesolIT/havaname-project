import fetchFromStrapi from "../../lib/dest"
import Link from "next/link";
import Layout from "../../components/Layout";

export default function Destinos({destinoItems}){
    const apiUrl = 'http://localhost:1337'
    return(
         <Layout>
            {destinoItems.map((destino)=>(
                // <Link as ={`/post/mostrar/${destino.slug}`} href='/post/mostrar/[id]'>
                   
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
            ))}
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

       
        
        