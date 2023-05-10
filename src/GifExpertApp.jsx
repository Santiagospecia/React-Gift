import { useState } from "react";
import { AddCategory, GridCategory } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["FUTBOL", "TENIS"]);

  const addCategory = (newCategorie) => {
    if (categories.includes(newCategorie.trim().toUpperCase())) {
      alert("El valor ingresado ya existe en la lista");
      return;
    }
    setCategories([...categories, newCategorie.trim().toUpperCase()]);
    //si quiero que agregue al principio:
    //  setCategories([ 'Rugby', ...categories])
  };
  return (
    <>
      <h1>Buscador de gif ! </h1>

     
      <AddCategory
        //  setCategories={setCategories} esta es una forma pero hay una mejor manera de hacerlo:
        onNewCategorie={(event) => addCategory(event)}
      ></AddCategory>
    


        {categories.map(
          (
            value,
            index //nunca poner como key el index
          ) => (
            <GridCategory key={value} category={value}></GridCategory>
          )
        )}
      
  
    </>
  );
};
