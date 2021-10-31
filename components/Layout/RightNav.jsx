import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Language from './Language';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  a {
    padding: 10px 10px;
    text-transform:uppercase;
    color: grey;
    text-decoration: none;
  }
  a:hover{
    border-bottom: solid 2px #3498db;
    color: #3498db;
    }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
      <div>
      <Language />
    <Ul open={open}>
      <Link  href='/'><a>Inicio</a></Link>
      <Link  href='/destinos/destinos'><a>Destinos</a></Link>
      <Link  href='/excursiones/excursiones'><a>Excursiones</a></Link>
      <Link  href='/actualidad/actualidad'><a>Actualidad</a></Link>
      <Link  href='/promociones/promociones'><a>Promociones</a></Link>
      <Link  href='/contacto/contactanos'><a>Contáctanos</a></Link>
    </Ul>
      </div>
  )
}

export default RightNav
      