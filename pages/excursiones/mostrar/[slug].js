import Layout from "../../../components/Layout";
import fetchFromStrapi from "../../../lib/dest";

const ExcursionItems = ({excursion})=>{
  const apiUrl = 'http://localhost:1337'
  return(
    <Layout>
      <div>
        <h1>{excursion.titulo}</h1>
      </div>
      <div>
        <img src = {apiUrl + excursion.imagen.url} alt={excursion.titulo}/>
      </div>
      <div>
        {excursion.imagen.created_at}
      </div>
      <div>
        {excursion.descripcion}
      </div>
    </Layout>
  )
}

export async function getStaticPaths(){
  const excursiones = await fetchFromStrapi('excursions');
  return{
    paths: excursiones.map((excursion)=>({
      params:{
        slug: excursion.slug,
      },
    })),
    fallback: false,
  };
}
        

export async function getStaticProps({params}){
  const excursion = await fetchFromStrapi(`excursions?slug=${params.slug}`);
  return{
    props: {excursion:excursion[0]},
    revalidate:1,
  };
}

export default ExcursionItems