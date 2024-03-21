import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import { NowPlayingMovieList } from "./components/movies/NowPlayingMovieList";
import { MovieDetail } from "./components/movies/MovieDetail";
import { Home } from "./components/Home";
import { BeforeTodayMovieList } from "./components/movies/BeforeTodayMovieList";

export default function IndexPage() {
  return (
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Home />
                <NowPlayingMovieList />
              </React.Fragment>
            }
          />
          <Route path="/movies" element={<BeforeTodayMovieList/>} />
          <Route path="/movies/:id" element={<MovieDetail/>} />
        </Routes>
      </div>
  );
}
