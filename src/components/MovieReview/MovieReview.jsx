import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { useFetchData } from 'hooks/useFetchData';
import { getUserReviews } from 'services';

import style from './MovieReview.module.css';
import Loader from 'components/Loader/Loader';

const MovieReview = () => {
  const { movieId } = useParams();

  const getMovieReviews = useCallback(() => getUserReviews(movieId), [movieId]);

  const { data: movieReviews, isLoading } = useFetchData(getMovieReviews);

  if (movieReviews && movieReviews.length === 0) {
    return <p>We don`t have any reviews for this movie</p>;
  }
  return (
    <>
      {isLoading && <Loader />}
      {movieReviews && (
        <ul>
          {movieReviews.map(({ author, id, content }) => (
            <li key={id}>
              <p className={style.authorName}>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieReview;
