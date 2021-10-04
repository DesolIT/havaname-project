import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 200px;
  height: 250px;
  box-shadow: rgb(0 0 0) 0px 2px 20px -13px;
  margin: 10px;
  border-radius: 10px;
`;

const Servicios = (props)=>{
    return(
        <>
        <Card>
            <h3>{props.titulo}</h3>
            <img src={props.imagen}/>  
            {props.id}      
        </Card>
        </>
        
    )
}

export default Servicios