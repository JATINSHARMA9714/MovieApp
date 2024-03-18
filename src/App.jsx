import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Routes/Home'
import Trending from './components/Routes/Trending';
import Popular from './components/Routes/Popular';
import Movies from './components/Routes/Movies';
import TVShows from './components/Routes/TVShows';
import People from './components/Routes/People';
import MovieDetails from './components/Routes/MovieDetails';
import TvDetails from './components/Routes/TvDetails';
import PeopleDetails from './components/Routes/PeopleDetails';
import Trailer from './components/Partials/Trailer';

function App() {

  return (
    <>
    <div className='w-full min-h-screen bg-[#1F1E24] flex'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/trending' element={<Trending />} />
      <Route path='/popular' element={<Popular />} />
      <Route path='/movie' element={<Movies />} />
      <Route path='/movie/details/:id' element={<MovieDetails/>}>
      <Route path='/movie/details/:id/trailer' element={<Trailer/>} />
      </Route>
      <Route path='/tv' element={<TVShows />} />
      <Route path='/tv/details/:id' element={<TvDetails/>}>
        <Route path='/tv/details/:id/trailer' element={<Trailer/>} />
      </Route>
      <Route path='/person' element={<People />} />
      <Route path='/person/details/:id' element={<PeopleDetails />} />
    </Routes>
    </div>
    </>
  )
}

export default App
