import Layout from "../../../components/Layout";
import fetchFromStrapi from "../../../lib/dest";
import { useRouter } from "next/router";

const ActualidadItems = ({actualidad})=>{
  const apiUrl = 'http://localhost:1337'
  const router = useRouter()
  if (router.isFallback) {
    // return <div>Loading...</div>
    return null
  }
  return(
    <Layout>
      <div>
        <h1>{actualidad.titulo}</h1>
      </div>
      <div>
        <img src = {apiUrl + actualidad.imagen.url} alt={actualidad.titulo}/>
      </div>
      <div>
        {actualidad.imagen.created_at}
      </div>
      <div>
        {actualidad.descripcion}
      </div>
    </Layout>
  )
}

export async function getStaticPaths(){
  const actualidads = await fetchFromStrapi('actualidads');
  return{
    paths: actualidads.map((actualidad)=>({
      params:{
        slug: actualidad.slug,
      },
    })),
    fallback: false,
  };
}
        

export async function getStaticProps({params}){
  const actualidad = await fetchFromStrapi(`actualidads?slug=${params.slug}`);
  return{
    props: {actualidad:actualidad[0]},
    revalidate:1,
  };
}

export default ActualidadItems