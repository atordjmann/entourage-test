"use client"
import type { Metadata } from "next";
import { MovieList } from "./components/movies/MovieList";
import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import { MovieDetail } from "./components/movies/MovieDetail";
import Nav from "./components/Nav";

export default function IndexPage() {
  return (
      <div className="App">
        <Routes>

          <Route
            path="/"
            element={
              <React.Fragment>
                <MovieList />
              </React.Fragment>
            }
          />
          <Route path="/movies/:id" element={<MovieDetail/>} />
        </Routes>
      </div>
  );
}
