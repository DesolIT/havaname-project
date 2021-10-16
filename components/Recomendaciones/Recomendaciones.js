import React, {useState, useEffect} from "react";
import Button from '/src/lib/Button'
import router from "next/router";
import { Cell, Grid } from "styled-css-grid";
import { Card, CardContent, CardFooter, CardHeader } from "../../src/lib/CardWidget";

const Recomendaciones = ()=>{
    const [listSolicit, setListSolicit] = useState([]);
useEffect(()=>{
    if (typeof localStorage != 'undefined') {
        let arregloStrg = JSON.parse(localStorage.getItem('recomendaciones'))
        if (arregloStrg?.length > 0) setListSolicit(arregloStrg)
    }         
},[])

    return(
        <>
            <h1>Recomendaciones</h1>
            <Button
            onClick={() =>
                router.push(`/testimonials/create`)
              }>
            Crear Recomendaciones
            </Button>

            <Grid columns={1}>
        {listSolicit.length > 0 
        ? listSolicit.map((listS)=>{
            return(
                <Cell width={1} key={listS.autor}>
                    <Card>
                        <CardHeader>
                            <span>Autor : {listS.autor}</span>
                        </CardHeader>
                        <CardContent>
                            <span>{listS.contenido}</span>  
                        </CardContent>

                     
                    </Card>   
                    
                </Cell>
            )
        }): <p>No existe ninguna solicitud para mostrar</p>
        }
    </Grid>
        </>
    )
}
export default Recomendaciones

                        
                        
                        
                    
                
                  