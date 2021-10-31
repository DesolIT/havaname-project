import React from "react";
import { Cell, Grid } from "styled-css-grid";
import CardAdvisor from "./CardAdvisor";
import EntradasRecientes from "./EntradasRecientes";
import UltimasNoticias from "./ultimasnoticias";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <Grid columns={3}>
      <Cell width={1}>
        <UltimasNoticias />
      </Cell>
      <Cell width={1}>
        <EntradasRecientes />
      </Cell>
      <Cell width={1}>
        <CardAdvisor />
      </Cell>
      <Cell width={3}>
        <div>
        <div>
          <p>2021 © Havaname</p>
        </div>
        <div>
        <Link href="/">
          <a>
            <img id="logo" src="/havaname-logo.png" alt="logo" />
          </a>
        </Link>
        </div> 
        </div>           
      </Cell>
    </Grid>
  );
};

export default FooterComponent;

