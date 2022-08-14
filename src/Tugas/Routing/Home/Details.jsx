import { useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams()
    return (
        <h1>Halaman ke {id}</h1>
    )
}

export default Details;