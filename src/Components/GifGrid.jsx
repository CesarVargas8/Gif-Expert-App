import { useFetchGifs } from "../Hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>
      
      {isLoading && (<h2>Loading...</h2>)}

      <div className="card-grid">
        {
          images.map((image) => (
            <GifItem 
              key={image.id}
              {...image}
            />
          ))
        }
      </div>
    </>
  )
}