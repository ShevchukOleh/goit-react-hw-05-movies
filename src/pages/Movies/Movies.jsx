import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input } from './Movies.styled';
import { Link, useSearchParams } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '11c18f4587e0f81a9d7265ade8abe4b9';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
   const query = searchParams.get("query") ?? '';

  const fetchMoviesQuery = async () => {
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
      query: query
    });

    const url = `${BASE_URL}/search/movie?query=${query}&${searchParams}`;
    const response = await axios.get(url);
    const { data } = response;
    setMovies(data.results);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    if (!query) {
      setMovies([]);
      return;
    }

    fetchMoviesQuery();
  };

  const handleInputChange = (e) => {
    updateQueryString(e.target.value);
  };

  const updateQueryString = (value) => {
    if (value === "") {
      setSearchParams({})
    } else {
      setSearchParams({ query: value });
    }
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <Input
          type="text"
          value={query? query : ''}
          onChange={handleInputChange}
        />
        <Button type='submit'>Search</Button>
      </form>
      <div>
        {movies.map((movie) => (
          <Link key={movie.id} to={`${movie.id}`}><p>{movie.title}</p></Link>
        ))}
      </div>
    </div>
  );
};

export default Movies;