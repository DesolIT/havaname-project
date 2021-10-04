/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Card = styled.div`
  width: 200px;
  //   height: 250px;
  box-shadow: rgb(0 0 0) 0px 2px 20px -13px;
  padding: 10px;
  border-radius: 10px;
`;
const CardAdvisor = () => {
  return (
    <>
      <h2>Trip Advisor</h2>
      <Card>
        <p>Logo Aqui</p>
        <div>
          <dl>
            <a
              target="_blank"
              href="https://www.tripadvisor.es/Attraction_Review-g147271-d13129254-Reviews-Havaname-Havana_Ciudad_de_la_Habana_Province_Cuba.html"
              rel="nofollow"
            >
              <dt>Havaname</dt>
            </a>
            <dt>Havaname</dt>
          </dl>
        </div>
        <div>
          <dl>
            <dt>Valoracion de Viajeros de Tripadvisor</dt>
          </dl>
        </div>
        <div>
          <dl>
            <dt>Clasificacion en Tripadvisor</dt>
          </dl>
        </div>
        <div>
          <dl>
            <dt>Opiniones recientes de viajeros</dt>
          </dl>
        </div>
        <div>
          <ul>
            <Link href="#">
              <a>Lee Opiniones</a>
            </Link>
          </ul>
          <ul>
            <Link href="#">
              <a>Escribe una Opinion</a>
            </Link>
          </ul>
        </div>
      </Card>
    </>
  );
};

export default CardAdvisor;
