import React from "react";

import Cabecalho from "./Components/Cabecalho";
import ContainerWrapper from "./Components/Container";

import { GlobalStyle } from "./Components/GlobalStyle";

function App() {
  return (
    <>
    <GlobalStyle />
    <Cabecalho />
    <ContainerWrapper />
    </>
  );
}

export default App;
