// import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
require("dotenv").config();

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className={"animate__animated animate__fadeIn"}>{category}</h3>
      {loading && <p>Cargando...</p>}
      <div className={"card-grid"}>
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
