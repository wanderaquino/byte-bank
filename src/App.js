import React, { useState } from "react";

import Cabecalho from "./Components/Cabecalho";
import ContainerWrapper from "./Components/Container";

import { GlobalStyle } from "./Components/GlobalStyle";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./UI/themes";
import {ThemeSwitch} from "./Components/ThemeSwitch";


function App() {

  const [isLightTheme, setIsLightTheme] = useState(true);

  function handleClickThemeButton () {
    setIsLightTheme(!isLightTheme);
  }

  return (
    <>
    <ThemeProvider theme={isLightTheme? lightTheme : darkTheme}>
      <GlobalStyle />
      <Cabecalho />
      <ThemeSwitch  onClickFunction={handleClickThemeButton} theme={isLightTheme} />
      <ContainerWrapper />
    </ThemeProvider>
    </>
  );
}

export default App;
