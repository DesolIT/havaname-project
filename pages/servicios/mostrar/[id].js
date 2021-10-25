import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Leer from "../leer/leer";

const Mostrar = (props) => {
  const router = useRouter();
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(router.query.id);
  }, [router.query]);

  return (
         <Leer id={id}/>
   );
};

export default Mostrar;