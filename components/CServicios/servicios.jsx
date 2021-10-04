import React from "react";
import { Card, CardContent, CardHeader } from "../../src/lib/CardWidget";

const Servicios = (props) => {
  return (
    <>
      <Card>
        <CardHeader>
          <h3>{props.titulo}</h3>
        </CardHeader>
        <CardContent>
          <img src={props.imagen} />
          {props.id}
        </CardContent>
      </Card>
    </>
  );
};

export default Servicios;
