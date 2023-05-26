import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { Container, Movie, Title } from './Home.styled';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '11c18f4587e0f81a9d7265ade8abe4b9';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  async function fetchPopularMovies() {
    const searchParams = new URLSearchParams({
      api_key: API_KEY
    });

    const url = `${BASE_URL}/movie/popular?${searchParams}`;
    const response = await axios.get(url);
    const { data } = response;
    setPopularMovies(data.results);
  }
    
  return (
    <Container>
      <Title>Trending Today</Title>
      <div>
        {popularMovies.map(movie => (
            <Link key={movie.id} to={`movies/${movie.id}`} state={{ from: location }}><Movie>&bull; {movie.title}</Movie></Link>
        ))}   
      </div>
    </Container>
  );
};
export default Home;