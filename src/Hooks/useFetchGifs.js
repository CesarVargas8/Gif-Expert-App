import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/getGifs";

export const useFetchGifs = (category) => {

   
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

//   const getImages = async (category) => {
//     const images = await getGifs(category);
//     setImages(images);
//   }

  useEffect(() => {
    getGifs(category)
      .then(newImages => setImages(newImages));
      setIsLoading(false);
  }, [])
  
   return { 
      images, 
      isLoading
   };

   
}