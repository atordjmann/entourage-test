"use client";
import { useGetMoviesQuery } from "@/lib/features/movies/moviesApiSlice";
import { useState } from "react";

const options = [5, 10, 20, 30];

export const Movies = () => {
  const [numberOfMovies, setNumberOfMovies] = useState(10);
  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } =
    useGetMoviesQuery(numberOfMovies);

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div>
        <h3>Select the Quantity of Movies to Fetch:</h3>
        <select
          value={numberOfMovies}
          onChange={(e) => {
            setNumberOfMovies(Number(e.target.value));
          }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {data.results.map(({ id, title }) => (
          <span>title</span>
        ))}
      </div>
    );
  }

  return null;
};