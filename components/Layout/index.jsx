import React from "react";
import { Cell, Grid } from "styled-css-grid";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "./Navbar";
import FooterComponent from "../footer/FooterComponent";

const HeaderCell = styled(Cell)`
  position: sticky;
  top: 0;
  z-index: 6;
  height: 85x;
  box-shadow: rgb(0 0 0) 0px 2px 20px -13px;
  margin: 0;
  padding: 12px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Grid
        columns="1fr minmax(200px,auto)"
        rows={"minmax(68px,auto) 1fr minmax(68px,auto)"}
      >
        <HeaderCell width={2}>
          <Navbar />
        </HeaderCell>
        <Cell>{children}</Cell>
        <Cell width={2}>
          <FooterComponent />
        </Cell>
      </Grid>
    </>
  );
};

export default Layout;
