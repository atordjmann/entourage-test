import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MovieDetailDto, MovieListDto } from "./movies.model";


// Define a service using a base URL and expected endpoints
export const moviesApiSlice = createApi({
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
        const token = process.env.NEXT_PUBLIC_TMDB_TOKEN ?? ''
    
        // If we have a token set in state, let's assume that we should be passing it.
        headers.set('Authorization', `Bearer ${token}`)
            
        return headers
      },
  }),
  reducerPath: "moviesApi",
  // Tag types are used for caching and invalidation.
  tagTypes: ["Movies"],
  endpoints: (build) => ({
    getNowPlayingMovies: build.query<MovieListDto, number>({
      query: (page) => `/movie/now_playing?page=${page}`,
      // `providesTags` determines which 'tag' is attached to the
      // cached data returned by the query.
      providesTags: (result, error, id) => [{ type: "Movies", id }],
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),
    getAllBeforeToday: build.query<MovieListDto, number>({
      query: (page) => {
        const today = new Date();
        const formatedDate = today.toISOString().split('T')[0]
        return `/discover/movie?page=${page}&primary_release_date.lte=${formatedDate}&sort_by=primary_release_date.desc`
      },
      // `providesTags` determines which 'tag' is attached to the
      // cached data returned by the query.
      providesTags: (result, error, id) => [{ type: "Movies", id }],
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),
    getById: build.query<MovieDetailDto, number>({
      query: (id) => `/movie/${id}`,
      providesTags: (result, error, id) => [{ type: "Movies", id }],
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),
    getSimilarMoviesById: build.query<MovieListDto, number>({
      query: (id) => `/movie/${id}/similar`,
      providesTags: (result, error, id) => [{ type: "Movies", id }],
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),
  }),
});

// Hooks are auto-generated by RTK-Query
// Same as `moviesApiSlice.endpoints.getMovies.useQuery`
export const { useGetNowPlayingMoviesQuery, useGetAllBeforeTodayQuery, useGetByIdQuery, useGetSimilarMoviesByIdQuery } = moviesApiSlice;