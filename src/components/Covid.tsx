import axios from "axios";
import { useState } from "react";

const Covid = () => {
    const [confirmed, setConfirmed] = useState(0)
    const [confirmedDeaths, setConfirmedDeaths] = useState(0)

    const getCovid = async () => {

        console.log("getCovid")
        const { data, status } = await axios.get("https://coronavirus.m.pipedream.net/")

        if (status !== 200) {
            alert("Não foi possível buscar os dados");
        }

        const { summaryStats } = data;
        const { global } = summaryStats;

        console.log({ 'Confirmados': global.confirmed })
        console.log({ 'deaths': global.deaths })

        setConfirmed(global.confirmed)
        setConfirmedDeaths(global.deaths)
    }

    return <>
        <h2>Casos confirmados: {confirmed}</h2>
        <h2>Mortes confirmadas: {confirmedDeaths}</h2>
        <button onClick={() => getCovid()}>Botao</button>
    </>
}

export default Covid;