import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getTrendingFilms() {
  const { data } = await axios.get('/trending/movie/day', {
    params: {
      api_key: 'b72b31e819ea439a1f54ca720299786f',
    },
  });
  return data.results;
}

export async function getFilmInfoByFilmId(id) {
  const { data } = await axios.get(`/movie/${id}`, {
    params: {
      api_key: 'b72b31e819ea439a1f54ca720299786f',
    },
  });
  return data;
}

export async function getFilmsByTitle(title) {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      api_key: 'b72b31e819ea439a1f54ca720299786f',
      query: title,
    },
  });
  return data.results;
}

export async function getMovieCastByFilmId(id) {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: 'b72b31e819ea439a1f54ca720299786f',
    },
  });
  return data.cast;
}

export async function getUserReviews(id) {
  const { data } = await axios.get(`/movie/${id}/reviews`, {
    params: {
      api_key: 'b72b31e819ea439a1f54ca720299786f',
    },
  });
  return data.results;
}
