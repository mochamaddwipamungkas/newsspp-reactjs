// const FunctionalComponent = ({nama}) => {
//     return (
//         <div>
//             <h1>Membuat komponen dengan functional component</h1>
//             <h2>Hallo {nama}</h2>
//         </div>
//     )
// }

import { useState } from "react";

// export default FunctionalComponent;
const FunctionalComponent = (props) => {
    const [value, setValue] = useState(0);

    const handlePlus = () => {
        setValue(value + 1);
    }

    const handleMinus = () => {
        if (value > 0) {
            setValue(value - 1);
        }

    }

    return (
        <div>
            <h1>Membuat komponen dengan functional component</h1>
            <h2>Hallo {props.nama}, selamat belajar</h2>
            <button onClick={handleMinus}>-</button>
            <span>{' '}{value}{' '}</span>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}
FunctionalComponent.defaultProps = { //memberi nilai default pada props, akan dipakai apabila tidak ada parametr yg diberikan di index
    nama: "User"
}
export default FunctionalComponent;