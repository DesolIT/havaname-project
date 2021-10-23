// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import LeerPosts from "../leer/leerPost";


// const Post = (props) => {
//   const router = useRouter();
//   const [id, setId] = useState(null);

//   useEffect(() => {
//     setId(router.query.id);
//   }, [router.query]);

//   return (
//         <LeerPosts id={id}/>
//    );
// };

// export default Post;

import Layout from "../../../components/Layout";
import fetchFromStrapi from "../../../lib/dest";

const DestinoItems = ({destino})=>{
  const apiUrl = 'http://localhost:1337'
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
        // id:destino.id
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
