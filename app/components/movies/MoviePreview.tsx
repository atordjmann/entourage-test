"use client"
import { MovieDto } from "@/lib/features/movies/movies.model";
import { Link } from "react-router-dom";
import Image from "next/image";
import styles from "../../styles/movies.module.css";

type MovieProps = {
  movie: MovieDto
}

export const MoviePreview = ({movie}: MovieProps) => {
  const imgSrc = movie.poster_path == null ? "/cinema-adobe-stock.jpg" :
    `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
  <div className={styles.movie_preview}>
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <Link to={`/movies/${movie.id}`} className={styles.detail_link_button}>View Movie detail</Link>
    </div>
    <Image src={imgSrc} height="150" width="150" alt="poster"/>
  </div>
  )
};