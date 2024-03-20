import { useGetByIdQuery } from "@/lib/features/movies/moviesApiSlice";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../Loader";
import { Error } from "../Error";
import { SimilarMovies } from "./SimilarMovies";

export const MovieDetail = () => {
  const params = useParams();

  if(params?.id == null){
    return null;
  }
  const id = +params.id;

  const { data, isError, isLoading, isSuccess } =
    useGetByIdQuery(id);
  
  if (isError) {
    return (<Error/>);
  }

  if (isLoading) {
    return (<Loader/>);
  }

  if (isSuccess) {

    return (
      <div>
        <Link to={`/`}>Back home</Link>

        <h1>{data.title}</h1>
        <p>{data.overview}</p>

        <h1>Similar movies</h1>
        <SimilarMovies id={data.id}/>
      </div>
    );
  }

  return null;
};