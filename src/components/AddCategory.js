import { useState } from "react";
export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Hola Mundo");

  const handleInputChange = ()=>{
      
  }

  return (
    <>
      <input type="text" value={inputValue} onChange={console.log} />
    </>
  );
};
