import styled from "styled-components";

export const lightBackground = '#f1f1f1';
export const lightTextColor = 'grey';
export const lightBoxInsideBackground = "white";

export const darkBackground = '#363537';
export const darkTextColor = 'white';
export const darkBoxInsideBackground = "#5c5b5e";

export const Icone = styled.img`
    height: 25px;
    width: 25px;
`
export const Box = styled.div `

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({theme}) => theme.inside};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;
  color: ${({theme}) => theme.text};

  @media (max-width: 800px) {
      width: 95%;
      margin: 5px;
  }

`

export const ContaButton = styled.button `

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

export const ThemeButton = styled.button `
  position: absolute;
  top: 3vh;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`