import React, { useEffect, useState } from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import Link from 'next/link'
import { getCarrusel } from './slider'
import { Cell, Grid } from "styled-css-grid";
import styled from "styled-components";
         
const CenterCell = styled(Cell)`
  text-align: center;
  p{
    font-style: italic;
  }
`;

const Carrusel = ()=>{
    const [list, setList] = useState([]);
    const apiUrl = 'http://localhost:1337'

    useEffect(()=>{
        let mounted=true;
        getCarrusel()
        .then(items=>{
            if(mounted){
                setList(items)
            }
        })
        return ()=> mounted=false;
    },[])

    return(
        <>
            <CenterCell>
            <Grid columns={1}>
                <Slider autoplay ={3000}>
                    {list.map((item)=> (
                    <div 
                        key={item.id}
                        style={{background: `url('${item.imagen[0].name}')no-repeat center center`}}
                    >
                    <h1>{item.descripcion}</h1>
                    <Link href={`/promociones/promociones`}>
                        <a>Leer mas...</a>
                    </Link>
                    </div>)
                    )}
                </Slider>
            </Grid>
            </CenterCell>
         </>
     )
 }
            
 export default Carrusel
         
       
    
                       
 
                