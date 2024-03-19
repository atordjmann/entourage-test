"use client"
import type { Metadata } from "next";
import { Movies } from "./components/movies/Movies";
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { MovieDetail } from "./components/movies/MovieDetail";

export default function IndexPage() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Movies />
              </React.Fragment>
            }
          />
          <Route path="/movies/:id" element={<MovieDetail/>} />
        </Routes>
      </div>
    </Router>
  );
}
