import React, { useEffect, useState } from "react";
import {Box, ContaButton} from "../../UI/index";
import {api} from "../../services/api";
import { LinhaExtrato } from "../LinhaExtrato";

export function Extrato () {

    const [updates, setUpdates] = useState([{}]);
    const [isWaiting, setIsWaiting] = useState(true);


    useEffect(() => {
        async function fetchUpdates() {
            const response =  await api.get("/updates");
            setUpdates(response.data);
            setIsWaiting(false);
        };
        fetchUpdates();

        // setUpdates(response);
        }, []
    );

    return (
        <Box>
            {
                isWaiting ?
                    <div>Carregando</div> :
                updates.map(update => <LinhaExtrato key={update.id} type={update.type} from={update.from} value={update.value} date={update.date} />)
            }
            <ContaButton>Ver Mais</ContaButton>
        </Box>
    )
}