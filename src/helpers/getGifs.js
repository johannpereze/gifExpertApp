export const getGifs = async (category) => {

  const REACT_APP_GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=${REACT_APP_GIPHY_API_KEY}`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};
