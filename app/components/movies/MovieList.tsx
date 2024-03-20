"use client";
import { useGetUpcomingMoviesQuery } from "@/lib/features/movies/moviesApiSlice";
import { useState } from "react";
import { Loader } from "../Loader";
import { Error } from "../Error";
import { Link } from "react-router-dom";
import { Movie } from "./Movie";

export const MovieList = () => {
  const [page, setMoviesPage] = useState(1);
  const { data, isError, isLoading, isSuccess } =
    useGetUpcomingMoviesQuery(page);
  
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
      <div>
        <h3>Select the page</h3>
        <select
          title="select page"
          value={page}
          onChange={(e) => {
            setMoviesPage(Number(e.target.value));
          }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {data.results.map((movie) => (
          <div key={movie.id}>
            <Movie movie={movie}/>
          </div>
        ))}
      </div>
    );
  }

  return null;
};