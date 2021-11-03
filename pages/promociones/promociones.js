

import { Cell, Grid } from "styled-css-grid";
import Layout from "../../components/Layout";
import fetchFromStrapi from "../../lib/dest";

export default function Promociones({promocionItems}){
    const apiUrl = 'http://localhost:1337'
    return(
         <Layout>
             <Grid columns={1}>
                <div>
                    <h1>Promociones</h1>
                </div>
            {   promocionItems.map((promo)=>(
                <Cell key={promo.id} width={1}>  
                        <div>
                    <div>
                            <h2>{promo.titulo}</h2>
                        </div>
                        <div>
                            <p>{promo.descripcion }</p>
                        </div>
                    </div>
                    </Cell>
            ))}
            </Grid>
       </Layout>

    )
               
}
                        
                    
export async function getStaticProps(){
    const promocionItems = await fetchFromStrapi('promocions');
    return{
        props:{promocionItems},
        revalidate:1,
    };
}