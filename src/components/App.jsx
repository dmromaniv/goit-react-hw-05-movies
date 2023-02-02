import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const MovieReview = lazy(() => import('./MovieReview/MovieReview'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';
// import MovieReview from './MovieReview/MovieReview';
// import MovieCast from './MovieCast/MovieCast';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="review" element={<MovieReview />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
