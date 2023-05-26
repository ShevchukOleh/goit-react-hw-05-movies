import axios from 'axios';
import { useEffect, useState } from 'react';

const { useParams } = require('react-router-dom');

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '11c18f4587e0f81a9d7265ade8abe4b9';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

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
    <div>
      <ul>
        {cast.map(actor => {
          const imagePath = actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : '';
          return (
            <li key={actor.id}>
            <img src={imagePath} alt={actor.name} />
            <h3>{actor.name}</h3>
            <p>{actor.character}</p>
          </li>
          )
        })}
      </ul>
    </div>

  );
};