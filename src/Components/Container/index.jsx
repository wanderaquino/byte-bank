import React from "react";
import styled from "styled-components";

import Titulo from "../Titulo";
import Conta from "../Conta";


const Container = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`
const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ContainerWrapper = () => {
  return (
    <div className="container">
      <Titulo>Olá Fulano!</Titulo>
      <section className="conteudo">
        <Conta />
      </section>
    </div>
  );
};

export default Container;
