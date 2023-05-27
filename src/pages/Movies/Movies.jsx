import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Button, Container, Form, Input, Movie } from './Movies.styled';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { API_KEY, BASE_URL } from 'components/API/API';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});
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

    setMovies([])
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
        {movies.length !== 0 ?movies.map((movie) => (
          <Link key={movie.id} to={`${movie.id}`} state={{ from: location }}><Movie>&bull; {movie.title}</Movie></Link>
        )) : <div>Please enter the correct search query.</div>}
      </div>
    </Container>
  );
};

Movies.propTypes = {
  query: PropTypes.string,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};

export default Movies;