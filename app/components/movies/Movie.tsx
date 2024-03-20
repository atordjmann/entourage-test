import { MovieDto } from "@/lib/features/movies/movies";
import { Link } from "react-router-dom";
import Image from "next/image";
type MovieProps = {
  movie: MovieDto
}

export const Movie = ({movie}: MovieProps) => {
  const imgSrc = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
  return (
  <div>
    <Image src={imgSrc} height="40" width="40" alt="poster"/>
    <h1>{movie.title}</h1>
    <p>{movie.overview}</p>
    <Link to={`/movies/${movie.id}`}>View Movie detail</Link>
  </div>
  )
};