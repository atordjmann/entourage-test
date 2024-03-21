"use client"
import { useGetByIdQuery } from "@/lib/features/movies/moviesApiSlice";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader";
import { Error } from "../Error";
import { SimilarMovies } from "./SimilarMovies";
import Image from "next/image";

import styles from "../../styles/movies.module.css";

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
    const imgSrc = data.poster_path == null ? "/cinema-adobe-stock.jpg" :
    `https://image.tmdb.org/t/p/w500/${data.poster_path}`;

    return (
      <>
      <div className={styles.movie_detail_background}
        style={{backgroundImage: `url(${imgSrc})`}}></div>

      <div  className={styles.movie_detail}>
        
      <h1 className={styles.movie_title}>{data.title}</h1>
      <div className={styles.movie_detail_overview}>
        <div className={styles.movie_detail_key_info}>
          <p>Release date: {data.release_date}</p>
          <p>{data.vote_average} ({data.vote_count} vote count)</p>
          <p>{data.overview}</p>
          <p>Genres: {data.genres.map(g => g.name).join(', ')}</p>
        </div>
        <Image src={imgSrc} height="150" width="150" alt="poster"/>
      </div>      

      <h1>Financial data</h1>
      <p>Production companies: {data.production_companies.map(g => g.name).join(', ')}</p>
      <p>Production countries: {data.production_countries.map(g => g.name).join(', ')}</p>
      <p>Budget: ${data.budget}</p>
      <p>Revenue: ${data.revenue}</p>

      <h1>Similar movies</h1>
      <div className={styles.similar_list}>
        <SimilarMovies id={data.id}/>
      </div>

    </div>
    </>
    );
  }

  return null;
};
