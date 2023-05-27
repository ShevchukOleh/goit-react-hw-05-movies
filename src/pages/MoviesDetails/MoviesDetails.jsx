import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Container, ContainerMovieInfo, GenresList, GoBack, Image, InformationContainer, InformationList, InformationListItem, MovieInfo, MovieOverview, MovieTitle, OverviewTitle, UserScore } from './MoviesDetails.styled';
import { Suspense } from 'react';
import { API_KEY, BASE_URL, noPhoto } from 'components/API/API';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/');

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
  }, [movieId]);;

  if (!movie) {
    return <div>Loading...</div>;
  }

  const imagePath = movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`: noPhoto;
  return (
    <>
      <ContainerMovieInfo>
        <Link to={backLinkLocationRef.current}><GoBack>&larr; Go back</GoBack></Link>
      </ContainerMovieInfo>
      <Container>
        <Image src={imagePath} alt={movie.title} />
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
            <Link to={`cast`}><InformationListItem>&bull; Cast</InformationListItem></Link>
            <Link to={`reviews`}><InformationListItem>&bull; Reviews</InformationListItem></Link>
        </InformationList>
      </InformationContainer>
      <Suspense fallback={<Container>Loading...</Container>}>
        <Outlet />
      </Suspense>
    </>
  );
};

MoviesDetails.propTypes = {
  movieId: PropTypes.number,
  movie: PropTypes.shape({
    id: PropTypes.number,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
  }),
};

export default MoviesDetails;