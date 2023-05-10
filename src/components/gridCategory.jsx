

import GridItem from "./gridItem";
import useFetchGift from "../hooks/useFetchGift";

export const GridCategory = ({ category }) => {

  const {images, isLoading} = useFetchGift(category);

  return (
    <>
      {isLoading && <h2>Cargando...</h2> }
      <h3>{category}</h3>
      <div className="card-grid">
        {images?.map((value, index) => (
          <GridItem key={value.id} {...value}></GridItem>
        ))}
      </div>
    </>
  );
};
