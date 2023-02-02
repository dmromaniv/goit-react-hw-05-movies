import React, { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSearchParams } from 'react-router-dom';

import style from './SearchForm.module.css';

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [searchQuery, setSearchQuery] = useState(query ?? '');

  const onChange = event => {
    setSearchQuery(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (searchQuery) setSearchParams({ query: searchQuery });
    else Notify.info('Please enter the movie title');
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <input
        className={style.input}
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={onChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
