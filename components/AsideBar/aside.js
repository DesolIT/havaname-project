import { useEffect, useState } from "react";
import { Cell, Grid } from "styled-css-grid";
import BuenoSaber from "../BuenoSaber/bsaber";
import { getAside } from "./latbar";

export default function Aside({}){
    const [list, setList] = useState([]);
   
    useEffect(()=>{
        let mounted=true;
        getAside()
        .then(items=>{
            if(mounted){
                setList(items)
            }
        })
        return ()=> mounted=false;
    },[])

    return(
         
            <Grid columns={3}>
            
                <Cell width={2}> 
                    <div>
                        
                       <div>
                            <h1>{list.titulo}</h1>
                        </div>
                        <div>
                            <p>{list.descripcion}</p>
                        </div>
                        <div>
                            <p>+ (53) {list.phone}</p>
                        </div>
                        <div>
                            <a href={`mailto: ${list.email}`} title="Yasmin mail contact">Yasmin</a>
                        </div>
                    </div>
                    <BuenoSaber />
                </Cell>
            </Grid>
    )
}
            
      
