import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag: string | null) => {
  const [gif, setGif] = useState("");

  const fetchData = async (tag: string | null) => {
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);

    console.log("data :>> ", data);

    const imageSrc = data.data.images.fixed_width.url;

    setGif(imageSrc);
  };

  useEffect(() => {
    fetchData(tag);
  }, [tag]);

  return { gif, fetchData };
};

export default useGif;
