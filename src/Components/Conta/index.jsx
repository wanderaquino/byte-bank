import React, { useState } from "react";
import styled from "styled-components";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import {Icone} from "../../UI/index";

const IconeMarginTop = styled(Icone) `

  margin-top: 2px

`

const Box = styled.div `

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;

`

const ContaButton = styled.button `

  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: #41d3be;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;

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
          <div className="saldo">
            <span className="detalhe">R$</span> 0,00{" "}
          </div>
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
