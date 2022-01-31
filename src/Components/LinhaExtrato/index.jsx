import React from "react";
import styled from "styled-components";
import {categorias} from "../../assets/index.js";

const LinhaExtratoContainer = styled.div `

    display: flex;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.07);
    height: 5rem;
    align-items: center;
    justify-content: space-between;
    padding: .7rem 1rem;
    margin: .5rem;

    div:nth-child(-n + 2) {
        margin-right: 1rem;
    }

`
const InfoWrapperLinhaExtrato = styled.div `

`

const IconeLinhaExtrato = styled.img `
    width: 2.5rem;
    height: 2.5rem;
`

const TipoLinhaExtrato = styled.span `
    display: flex;
    flex-direction: column;
`

const DataLinhaExtrato = styled.span `

`

export function LinhaExtrato ({type, from, value, date}) {
    return (
        <LinhaExtratoContainer>
            <InfoWrapperLinhaExtrato>
                <IconeLinhaExtrato src={categorias[`${type}`]} />
            </InfoWrapperLinhaExtrato>
            <InfoWrapperLinhaExtrato>
                <TipoLinhaExtrato>
                    <strong>{type}</strong>
                    <span>{from}</span>
                    <span>{value}</span>
                </TipoLinhaExtrato>
            </InfoWrapperLinhaExtrato>
            <InfoWrapperLinhaExtrato>
                <DataLinhaExtrato>{date}</DataLinhaExtrato>
            </InfoWrapperLinhaExtrato>
        </LinhaExtratoContainer>
    )
}