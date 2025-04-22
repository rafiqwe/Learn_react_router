import { useLoaderData } from "react-router-dom";
import { Card } from "../components/Card";

export const Movie = () => {
  const movieData = useLoaderData();

  return (
    <>
      <ul className="flex flex-wrap gap-5 ">
        {movieData.Search.map((curMovie) => {
          return <Card key={curMovie.imdbID} movies={curMovie} id={curMovie.imdbID}/>;
        })}
      </ul>
    </>
  );
};
