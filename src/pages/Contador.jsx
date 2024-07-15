import { useState } from "react";
import PropTypes from "prop-types";
import "./Contador.css";

// function Contador() {
//   const [contador, setContador] = useState(1);

//   function handleAdd() {
//     setContador(contador + 1);
//     //prevState
//   }

//   function handleMinus() {
//     setContador(contador - 1);
//   }

//   return (
//     <>
//       <div className="container">
//         <button onClick={handleMinus}>-
//         </button>
//         <p>
//           <strong>{contador}</strong>
//         </p>
//         <button onClick={handleAdd}>+
//         </button>
//       </div>
//     </>
//   );
// }

function Contador() {
  const [contador, setContador] = useState(0);

  return (

    <div className="container">
      <button onClick={() => setContador((prevState) => prevState - 1)}>
        -
      </button>
      <span>{contador}</span>
      <button onClick={() => setContador((prevState) => prevState + 1)}>
        +
      </button>
    </div>
  
  );
}

export default Contador;

Contador.propTypes = {
  contador: PropTypes.number,
};
