import { useState } from "react";
import { Loader } from "../Loader";
import { Error } from "../Error";
import { MoviePreview } from "./MoviePreview";
import styles from "../../styles/movies.module.css";
import { useGetNowPlayingMoviesQuery } from "@/lib/features/movies/moviesApiSlice";

export const NowPlayingMovieList = () => {
  const [page, setMoviesPage] = useState(1);
  const { data, isError, isLoading, isSuccess } =
    useGetNowPlayingMoviesQuery(page);
  
    let options = [1];
    if (isError) {
      return (<Error/>);
    }
  
    if (isLoading) {
      return (<Loader/>);
    }

  if (isSuccess) {
    options = Array.from({length: data?.total_pages ?? 1 }, (_: any, i: number) => i + 1);

    return (
      <div className={styles.movie_list}>
        <h1>Now playing</h1>
        <div className={styles.page_selection}>
          <h3>Select the page</h3>
          <select className={styles.page_select}
            title="select page"
            value={page}
            onChange={(e) => {
              setMoviesPage(Number(e.target.value));
            }}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        
        {data.results.map((movie) => (
          <div key={movie.id}>
            <MoviePreview movie={movie}/>
          </div>
        ))}
      </div>
    );
  }

  return null;
};