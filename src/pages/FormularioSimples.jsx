
import { useState, useEffect } from "react";

export function SimpleForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [isComplete, setIsComplete] = useState(false);

 
  useEffect(() => {
    const isFormComplete = Object.values(formData).reduce((count, item) => {
      return item ? count + 1 : count;
    }, 0) === 3;
    setIsComplete(isFormComplete);
  }, [formData]);

  const handleButtonClick = () => {
    if (isComplete) {
      alert("Formulário preenchido completamente!");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="container mt-4">
      <form>
        <label htmlFor="name">Nome</label>
        <input
          placeholder="Informe seu nome"
          type="text"
          className="form-control"
          onChange={(e) =>
            setFormData((prevState) => ({ ...prevState, name: e.target.value }))
          }
        />

        <label htmlFor="email">E-mail</label>
        <input
          placeholder="Informe seu e-mail"
          type="email"
          className="form-control"
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />

        <label htmlFor="age">Idade</label>
        <input
          placeholder="Informe sua idade"
          type="text"
          className="form-control"
          onChange={(e) =>
            setFormData((prevState) => ({ ...prevState, age: e.target.value }))
          }
        />

        <button
          className="btn btn-primary mt-4"
          type="button"
          onClick={handleButtonClick}
        >
          Cadastrar
        </button>
      </form>

      {isComplete && <p>Formulário preenchido completamente!</p>}
    </div>
  );
}

export default SimpleForm;


//validação para idade ser um number
// useEffect(() => {
//     const isFormComplete = Object.values(formData).reduce((count, item) => {
//       if (typeof item === 'string' && item.trim() !== '') {
//         return count + 1;
//       }
//       return count;
//     }, 0) === 3 && !isNaN(formData.age);
    
//     setIsComplete(isFormComplete);
//   }, [formData]);


// SimpleForm.propTypes = {
//     formData: PropTypes.shape({
//       name: PropTypes.string,
//       email: PropTypes.string,
//       age: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number
//       ]),
//     }),
//     isComplete: PropTypes.bool,
//     handleButtonClick: PropTypes.func,
//   };