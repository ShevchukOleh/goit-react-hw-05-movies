import { Link, Outlet, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '11c18f4587e0f81a9d7265ade8abe4b9';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const searchParams = new URLSearchParams({
        api_key: API_KEY,
      });

      const url = `${BASE_URL}/movie/${movieId}?${searchParams}`;
      const response = await axios.get(url);
      const { data } = response;
      setMovie(data);
    };

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const imagePath = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
  return (
    <>
      <div><img src={imagePath} alt={movie.title}/></div>
      <div>
        <h1>MoviesDetails: {movie.title}</h1>
      </div>


      <ul>
        <li>
          <Link to={`${movieId}/subbreeds`}>Подподроды</Link>
        </li>
        <li>
          <Link to={`${movieId}/gallery`}>Галерея</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MoviesDetails;