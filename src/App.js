import React from "react";

import Cabecalho from "./Components/Cabecalho";
import ContainerWrapper from "./Components/Container";

import { GlobalStyle } from "./Components/GlobalStyle";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./UI/themes";

function App() {
  return (
    <>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Cabecalho />
      <ContainerWrapper />
    </ThemeProvider>
    </>
  );
}

export default App;
