import { useState, useEffect } from "react";
import { getGift } from "../functions/getGift";

export default function useFetchGift(category) {
  const [images, setimages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGift(category);
    setimages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);


  return {
    images: images,  //si el nombre de la variable es igual a la del return con ponerla una sola vez esta bien, es decir, solo: images,
    isLoading: isLoading,
  };
}
