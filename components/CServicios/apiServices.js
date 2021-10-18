import React, {useEffect, useState} from 'react'
import {getServices} from "./services";
import Layout from '../Layout'
import styled from "styled-components";
import { Cell, Grid } from "styled-css-grid";
import Link from 'next/link';
import Servicios from './servicios';

const CenterCell = styled(Cell)`
  text-align: center;
  p{
    font-style: italic;
  }
`;

const apiServices = ()=>{
    const [list, setList] = useState([]);
    const apiUrl = 'http://localhost:1337'

    useEffect(()=>{
        let mounted=true;
        getServices()
        .then(items=>{
            if(mounted){
                setList(items)
            }
        })
        return ()=> mounted=false;
    },[])

    return(
        <>
        {/* <Layout> */}
            <CenterCell>
            <Grid columns={4}>
                {list.map(item=> (
            <Cell key={item.id} width={1}>
                <Link href={`/servicios/mostrar/${item.id}`}>
                    <a>
                    <Servicios imagen={apiUrl + item.imagen.formats.thumbnail.url} titulo={item.titulo} />
                    </a>
                </Link>
            </Cell>
             
             ))}
            </Grid>
            </CenterCell>
         {/* </Layout>     */}
         </>
     )
 }
 
 export default apiServices
                

