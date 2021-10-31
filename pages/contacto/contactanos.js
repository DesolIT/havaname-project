import React, { useState } from "react";
import FormContact from "../../components/contacto/formContact";
import Layout from "../../components/Layout";
import { Cell, Grid } from "styled-css-grid";
import styled from "styled-components";

const H3 = styled.h3`
margin-top: 5px;
text-shadow: none;
font-weight: normal !important;
font-family: 'Open Sans', sans-serif;

`
const Contactanos = ()=>{
    return(
        <Layout>
             <h1>Contáctenos</h1>
            <Grid columns={4}>
                <Cell width={2}>
                    <FormContact/>
                </Cell>
                <Cell width={2}>
                    <H3>El equipo de guías de Havaname les brindan su servicio todos los días.</H3>
                    <H3>Siéntase libre de preguntar sobre cualquier duda que tenga y pida información. Estamos a su servicio.</H3>
                </Cell>
            </Grid>
        </Layout>
    )
}

export default Contactanos
