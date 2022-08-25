import Condiciones from "./Condiciones";

const Table = ({ registros }) => {
    return (
        <tr>
            <td id="_id">{registros._id}</td>
            <td>{registros.cityid}</td>
            <td>{registros.name}</td>
            <td>{registros.state}</td>
            <td>{registros.probabilityofprecip}</td>
            <td>{registros.relativehumidity}</td>
            <td>{registros.lastreporttime}</td>
            <td>{llueve(registros.probabilityofprecip, registros.relativehumidity)}</td>
        </tr>
    )
};

function llueve(prob, hum){
    var ll = "NO";
    if (prob > 60 || hum > 50)
        ll = "SI";
    return ll;
}

export default Table;