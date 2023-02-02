import React, { useCallback } from 'react';

import FilmsList from 'components/FilmsList/FilmsList';
import Loader from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import { useFetchData } from 'hooks/useFetchData';
import { useSearchParams } from 'react-router-dom';
import { getFilmsByTitle } from 'services';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const filmTitle = searchParams.get('query');

  const getFilms = useCallback(() => {
    if (filmTitle) {
      return getFilmsByTitle(filmTitle);
    }
  }, [filmTitle]);

  const { data: films, isLoading } = useFetchData(getFilms);

  return (
    <>
      <SearchForm />
      {isLoading ? <Loader /> : films && <FilmsList films={films} />}
    </>
  );
};

export default Movies;
