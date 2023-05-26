import { Link, Outlet, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, GenresList, InformationContainer, InformationList, MovieInfo, MovieOverview, MovieTitle, OverviewTitle, UserScore } from './MoviesDetails.styled';

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
      <button>Go back</button>
      <Container>
        <img src={imagePath} alt={movie.title} />
        <MovieInfo>
          <MovieTitle>{movie.title}</MovieTitle>
          <UserScore>User score: {(movie.vote_average*10).toFixed(0)}%</UserScore>
          <OverviewTitle>Overview</OverviewTitle>
          <MovieOverview>{movie.overview}</MovieOverview>
          <h4>Genres</h4>
          <GenresList>
            {movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </GenresList>
        </MovieInfo>
      </Container>


      <InformationContainer>
        <h4>Additional information</h4>
        <InformationList>
          <li>
            <Link to={`${movieId}/subbreeds`}>Cast</Link>
          </li>
          <li>
            <Link to={`${movieId}/gallery`}>Reviews</Link>
          </li>
        </InformationList>
        <Outlet />
      </InformationContainer>
    </>
  );
};

export default MoviesDetails;