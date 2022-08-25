import { useState } from "react";
import { useQuery } from 'react-query'; // alternativa a REDUX
import Table from "./Table";

const Condiciones = () => {

    const [size, setSize] = useState(10);

    let api_url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas/";

    const getRegistros = async ({queryKey}) => {
        const response = await fetch(`https://api.datos.gob.mx/v1/condiciones-atmosfericas?pageSize=${queryKey[1]}`); 
        return response.json();
    }

    const { data, status} = useQuery(['condiciones', size], getRegistros);

    switch(status){
        case "loading":
            return <h2>Cargando Registros . . .</h2>;
        case "ërror":
            return <h2>Error al Cargar los Registros . . .</h2>;
    }

    return (
        <div className="header">
            <h2>Prueba Técnica - Condiciones Atmosfericas</h2>
            <div>
                <p>Realizada por: Andres Soberanes</p>
                <div className="header">
                    <button className="btn" onClick={() => setSize(size - 10)}>Menos</button>
                    <button className="btn" onClick={() => setSize(size + 10)}>Más</button>
                </div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>ID_Ciudad</th>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>Probabilidad de Precipitación</th>
                        <th>Humedad Relativa</th>
                        <th>Último Reporte</th>
                        <th>¿Lloverá?</th>
                    </tr>
                    {data.results.map((reg) => (
                        <Table registros={reg} key={reg._id} />
                    ))}
                </table>
                <p>Total: {}</p>
            </div>
        </div>
    );
};

export default Condiciones;