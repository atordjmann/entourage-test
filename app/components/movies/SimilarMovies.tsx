"use client"
import { useGetSimilarMoviesByIdQuery } from "@/lib/features/movies/moviesApiSlice";
import { Loader } from "../Loader";
import { Error } from "../Error";
import { MoviePreview } from "./MoviePreview";

type SimilarMoviesProps = {
    id: number;
};

export const SimilarMovies = ({id}: SimilarMoviesProps) => {
 const { data, isError, isLoading, isSuccess } =
    useGetSimilarMoviesByIdQuery(id);
  
  if (isError) {
    return (<Error/>);
  }

  if (isLoading) {
    return (<Loader/>);
  }

  if (isSuccess) {

    return (
      <div>
        {data.results.map((movie) => (
          <div key={id}>
            <MoviePreview movie={movie} />
          </div>
        ))}
      </div>
    );
  }

  return null;
};