import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import { getMovieCastByFilmId } from 'services';
import { useFetchData } from 'hooks/useFetchData';
import style from './MovieCast.module.css';

const MovieCastList = () => {
  const { movieId } = useParams();

  const getMovieCast = useCallback(
    () => getMovieCastByFilmId(movieId),
    [movieId]
  );

  const { data: movieCastInfo, isLoading } = useFetchData(getMovieCast);

  return (
    <>
      {isLoading && <Loader />}
      {movieCastInfo && (
        <ul className={style.list}>
          {movieCastInfo.map(
            ({ character, original_name, profile_path, id }) => (
              <li className={style.card} key={id}>
                <img
                  width="100"
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : 'https://www.freeiconspng.com/thumbs/person-icon/name-people-person-user-icon--icon-search-engine-1.png'
                  }
                  alt={original_name}
                />
                <p>{original_name}</p>
                <p>Character: {character}</p>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default MovieCastList;
