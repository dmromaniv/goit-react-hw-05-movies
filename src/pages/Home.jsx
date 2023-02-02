import React from 'react';

import FilmsList from 'components/FilmsList/FilmsList';
import Loader from 'components/Loader/Loader';
import { getTrendingFilms } from 'services';
import { useFetchData } from 'hooks/useFetchData';

const Home = () => {
  const { data: films, isLoading } = useFetchData(getTrendingFilms);

  return (
    <>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {films && <FilmsList films={films} />}
    </>
  );
};

export default Home;
