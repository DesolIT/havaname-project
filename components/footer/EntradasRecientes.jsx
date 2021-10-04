import React from "react";
import Link from "next/link";
import styled from "styled-components";

const RecentEntries = styled.ul`
  list-style: none;
  padding-left: 0px;
`;

const EntradasRecientes = () => {
  return (
    <div>
      <h2>Entradas Recientes</h2>
      <RecentEntries>
        <li>
          <Link href="#">
            <a>Excursión Camagüey Colonial</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Excursión Trinidad</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Excursión Cienfuegos</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Excursión Habana Vieja</a>
          </Link>
        </li>
      </RecentEntries>
    </div>
  );
};

export default EntradasRecientes;
