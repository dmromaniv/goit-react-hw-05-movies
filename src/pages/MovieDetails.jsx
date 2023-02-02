import React, { Suspense, useCallback } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import MainFilmInfo from 'components/MainFilmInfo/MainFilmInfo';
import { useFetchData } from 'hooks/useFetchData';
import { getFilmInfoByFilmId } from 'services';

const MovieDetails = () => {
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const getFilms = useCallback(() => getFilmInfoByFilmId(movieId), [movieId]);

  const { data: filmInfo, isLoading } = useFetchData(getFilms);

  return (
    <>
      {isLoading && <Loader />}
      {filmInfo && (
        <>
          <Button path={backLinkHref} />
          <MainFilmInfo filmInfo={filmInfo} />
          <Suspense fallback={<div>Loading</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
