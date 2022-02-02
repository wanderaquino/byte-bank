import React from "react";
import { Icone, ThemeButton } from "../../UI";
import themeOn from "../../assets/images/themeOn.svg";
import themeOff from "../../assets/images/themeOff.svg";


export function ThemeSwitch ({theme, onClickFunction}) {

    return (
        <ThemeButton onClick={onClickFunction}>
            {
                theme ? (
                    <Icone src={themeOn} alt="Ícone Tema Claro" />
                ) : (
                    <Icone src={themeOff} alt="Ícone Tema Escuro" />
                )
            }
        </ThemeButton>
    )
}