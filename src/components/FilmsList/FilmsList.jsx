import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const FilmsList = ({ films }) => {
  const location = useLocation();

  return (
    <>
      {films.length !== 0 ? (
        <ul>
          {films.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>We did not find any movies.</p>
      )}
    </>
  );
};

export default FilmsList;
