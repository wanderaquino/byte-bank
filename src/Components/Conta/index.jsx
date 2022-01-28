import React, { useState } from "react";
import styled from "styled-components";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import {Icone} from "../../UI/index";
import {Box, ContaButton} from "../../UI/index";

const IconeMarginTop = styled(Icone) `

  margin-top: 2px

`

const Saldo = styled.div` 
  font-weight: 700;
  font-size: 32px;
`

const Detalhe = styled.span`

  color: #41d3be;
  font-size: 24px;

`

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <Icone src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalhe >R$</Detalhe> 0,00{" "}
          </Saldo>
        ) : null}
      </div>

      <ContaButton onClick={toggleHandler}>
        <IconeMarginTop
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </ContaButton>
    </Box>
  );
};

export default Conta;
