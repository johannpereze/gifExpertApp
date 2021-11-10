import { useEffect, useState } from "react";
require("dotenv").config();

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const REACT_APP_GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?q=one punch&limit=10&api_key=${REACT_APP_GIPHY_API_KEY}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img, title) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    console.log(gifs);
    setImages(gifs);
  };

  return (
    <div>
      <h3>{category}</h3>
      <ol>
        {images.map(({id, title}) => {
          return <li key={id}>{title}</li>;
        })}
      </ol>
    </div>
  );
};
