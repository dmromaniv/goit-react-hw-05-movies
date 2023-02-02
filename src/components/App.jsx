import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const MovieReview = lazy(() => import('./MovieReview/MovieReview'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));

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
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
