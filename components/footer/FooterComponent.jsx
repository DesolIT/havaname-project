import React from "react";
import { Cell, Grid } from "styled-css-grid";
import CardAdvisor from "./CardAdvisor";
import EntradasRecientes from "./EntradasRecientes";
import UltimasNoticias from "./ultimasnoticias";

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
    </Grid>
  );
};

export default FooterComponent;
