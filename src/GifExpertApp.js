import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dagon Ball",
  ]);

  // const handleAdd = () => {
  //   setCategories([...categories, "nuevo"]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />

      <ol>
        {categories.map((category, i) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
