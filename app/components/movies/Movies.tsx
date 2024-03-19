"use client";
import { useGetMoviesQuery } from "@/lib/features/movies/moviesApiSlice";
import { useState } from "react";
import { Loader } from "../Loader";
import Link from "next/link";

export const Movies = () => {
  const [page, setMoviesPage] = useState(1);
  const { data, isError, isLoading, isSuccess } =
    useGetMoviesQuery(page);
  
    let options = [1];
  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <Loader/>
    );
  }

  if (isSuccess) {
    options = Array.from({length: data?.total_pages ?? 1 }, (_: any, i: number) => i + 1);

    return (
      <div>
        <h3>Select the page</h3>
        <select
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
        {data.results.map(({ id, title, overview }) => (
          <div key={id}>
            <h1>{title}</h1>
            <h2>{overview}</h2>
            <Link href={`/movies/${id}`} className="button muted-button">
              View Movie detail
            </Link>
          </div>
        ))}
      </div>
    );
  }

  return null;
};