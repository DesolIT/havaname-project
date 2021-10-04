import React from "react";
import styled from "styled-components";
// import Flag from 'react-flags'
import Link from "next/link";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin:0px;
  a {
    padding:0 5px;
    text-transform:uppercase;
    color: grey;
    font-size:12px;
    text-decoration: none;
  }
  a:hover{
  text-decoration:underline;
  }
  `

const Language = () => {
    return (
      <Ul >
        <Link  href='/'><a>Español</a></Link>
        <Link  href='/'><a>Ingles</a></Link>
        <Link  href='/'><a>Frances</a></Link>
        <Link  href='/'><a>Entrar</a></Link>
        
      </Ul>
    )
  }
  
  export default Language