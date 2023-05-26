import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Image, List, ListItem, ActorName, Character } from './Cast.styled';

const { useParams } = require('react-router-dom');

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '11c18f4587e0f81a9d7265ade8abe4b9';
const noPhoto = 'https://i.ibb.co/0ymG7Qg/31284806-2.jpg';


export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  async function fetchCastMovie() {
    const searchParams = new URLSearchParams({
      api_key: API_KEY
    });

    const url = `${BASE_URL}/movie/${movieId}/credits?${searchParams}`;
    const response = await axios.get(url);
    const { data } = response;
    setCast(data.cast);
  }

  useEffect(() => {
    fetchCastMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <List>
        {cast.length !== 0 ? cast.map(actor => {
          const imagePath = actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : noPhoto;
          return (
            <ListItem key={actor.id}>
            <Image src={imagePath} alt={actor.name} />
            <ActorName>{actor.name}</ActorName>
            <Character>Character: {actor.character}</Character>
          </ListItem>
          )
        }) : `We haven't information about the cast of this film.` }
      </List>
    </Container>

  );
};