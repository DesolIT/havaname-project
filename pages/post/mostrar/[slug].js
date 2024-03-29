import Layout from "../../../components/Layout";
import fetchFromStrapi from "../../../lib/dest";
import {useRouter} from 'next/router'

const DestinoItems = ({destino})=>{
  const apiUrl = 'http://localhost:1337'
  const router = useRouter()
  if (router.isFallback) {
    // return <div>Loading...</div>
    return null
  }
  return(
    <Layout>
      <div>
        <h1>{destino.titulo}</h1>
      </div>
      <div>
        <img src = {apiUrl + destino.imagen.url} alt={destino.titulo}/>
      </div>
      <div>
        {destino.imagen.created_at}
      </div>
      <div>
        {destino.descripcion}
      </div>
    </Layout>
  )
}

export async function getStaticPaths(){
  const destinos = await fetchFromStrapi('destinos');
  return{
    paths: destinos.map((destino)=>({
      params:{
        slug: destino.slug,
      },
    })),
    fallback: false,
  };
}
        

export async function getStaticProps({params}){
  const destino = await fetchFromStrapi(`destinos?slug=${params.slug}`);
  return{
    props: {destino:destino[0]},
    revalidate:1,
  };
}

export default DestinoItems
