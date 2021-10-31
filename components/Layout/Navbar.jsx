/* eslint-disable @next/next/no-img-element */
import React from "react";
import Burger from "./Burger";
import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  width: 90%;
  height: 55px;
  margin: 20px;
  // border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  margin-top: 0;

  .logo {
    padding: 15px 0;
  }
`;
const Slogan = styled.span`
  font-size: 14px;
  font-style: italic;
  text-transform: capitalize;
  margin-left: 60px;
`;

const Navbar = () => {
  return (
    <>
      <Slogan>Descubra Las maravillas de Cuba.</Slogan>
      <Nav>
        <Link href="/">
          <a>
            <img id="logo" src="/havaname-logo.png" alt="logo" />
          </a>
        </Link>
        <Burger />
      </Nav>
    </>
  );
};

export default Navbar;
