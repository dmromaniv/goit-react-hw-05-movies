import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import style from './MainFilmInfo.module.css';

function MainFilmInfo({
  filmInfo: { original_title, overview, genres, vote_average, poster_path },
}) {
  const location = useLocation();
  const prevLocation = location.state?.from ?? '/';

  return (
    <>
      <div className={style.mainContentWrapper}>
        <img
          className={style.img}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt=""
        />
        <div>
          <h1>{original_title}</h1>
          <p>User score: {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres:</h2>
          <p>{genres.reduce((acc, { name }) => (acc += name + ' '), '')}</p>
        </div>
      </div>
      <div className={style.additionalContentWrapper}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: prevLocation }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="review" state={{ from: prevLocation }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MainFilmInfo;
