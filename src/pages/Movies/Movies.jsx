import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, Form, Input, Movie } from './Movies.styled';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '11c18f4587e0f81a9d7265ade8abe4b9';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? '';
  const location = useLocation();

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

  useEffect(() => {
    fetchMoviesQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlerSubmit = e => {
    e.preventDefault();
    if (!query) {
      setMovies([]);
      return;
    }

    fetchMoviesQuery();
  };

  const handleInputChange = e => {
    const searchQuery = e.target.value;
    if (searchQuery === "") {
      return setSearchParams({})
    };
      
    setSearchParams({ query: searchQuery });
  };

  return (
    <Container>
      <Form onSubmit={handlerSubmit}>
        <Input
          type="text"
          value={query}
          onChange={handleInputChange}
        />
        <Button type='submit'>Search</Button>
      </Form>
      <div>
        {movies.map((movie) => (
          <Link key={movie.id} to={`${movie.id}`} state={{ from: location }}><Movie>&bull; {movie.title}</Movie></Link>
        ))}
      </div>
    </Container>
  );
};

export default Movies;