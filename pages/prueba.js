import fetchFromStrapi from '../lib/dest'
import { Cell, Grid } from "styled-css-grid";
import Layout from '../components/Layout';

export default function Prueba({pruebaItems}){
    
    return(
         <Layout>
            <Grid columns={3}>
            
                <Cell width={1}> 
                    <div>
                        
                       <div>
                            <h1>{pruebaItems.titulo}</h1>
                        </div>
                        <div>
                            <p>{pruebaItems.descripcion}</p>
                        </div>
                        <div>
                            <p>+ (53) {pruebaItems.phone}</p>
                        </div>
                        <div>
                            <a href={`mailto: ${pruebaItems.email}`} title="Yasmin mail contact">Yasmin</a>
                        </div>
                    </div>
                </Cell>
            </Grid>
            
       </Layout>

    )
}
export async function getStaticProps(){
    const pruebaItems = await fetchFromStrapi('nosotros');
    return{
        props:{pruebaItems},
        revalidate:1,
    };
}