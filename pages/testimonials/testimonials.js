import React from 'react'
import { Cell, Grid } from 'styled-css-grid';
import styled from 'styled-components'
import Layout from '../../components/Layout'
import Recomendaciones from '../../components/Recomendaciones/Recomendaciones'

const CenterCell = styled(Cell)`
  text-align: center;
`;

const Testimonials = ()=>{
return(
    <>
    <Layout>
        <Grid columns={1}>
        <CenterCell>
            <Recomendaciones />
        </CenterCell>
        </Grid>
    </Layout>
    </>
)
}

export default Testimonials

