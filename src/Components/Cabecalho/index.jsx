import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #41d3be;
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`

const StyledLogo = styled.img`
  height: 50px;
  width: 50px;
`

const StyledButton = styled.button`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
`

const StyledPrimaryButton = styled(StyledButton)`
  color: white;
  background: transparent;
`

const StyledSecondaryButton = styled(StyledButton)`
  background: white;
  color: #41d3be;
`

const Cabecalho = () => {
  return (
    <StyledHeader>
      <StyledLogo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <StyledPrimaryButton className="btn-secundario" href="https://google.com">
          Ajuda
        </StyledPrimaryButton>
        <StyledSecondaryButton className="btn-primario" href="https://google.com">
          Sair
        </StyledSecondaryButton>
      </div>
    </div>
  );
};

export default Cabecalho;
