import { useState } from "react";

export const AddCategory = ({onNewCategorie}) => {
  const [inputValue, setinputValue] = useState("");
 

  const onInputChange = (event) => {
    setinputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <=  1) {
        alert("Debe ingresar una busqueda ");
        return
    }
    onNewCategorie(inputValue);
    setinputValue('');
    
  };


  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        onChange={(event) => onInputChange(event)}
        value={inputValue}
        type="text"
        placeholder="Buscar aquí"
      ></input>
    </form>
  );
};
