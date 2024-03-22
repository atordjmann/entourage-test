"use client"
import React from 'react'
import { NowPlayingMovieList } from "./components/movies/NowPlayingMovieList";
import { Home } from "./components/Home";

export default function IndexPage() {
  return (
      <div className="App">        
        <Home />
        <NowPlayingMovieList />           
      </div>
  );
}
