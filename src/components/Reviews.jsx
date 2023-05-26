import { useEffect, useState } from 'react';
import axios from 'axios';
const { useParams } = require('react-router-dom');

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '11c18f4587e0f81a9d7265ade8abe4b9';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setCast] = useState([]);

  async function fetchReviewsMovie() {
    const searchParams = new URLSearchParams({
      api_key: API_KEY
    });

    const url = `${BASE_URL}/movie/${movieId}/reviews?${searchParams}`;
    const response = await axios.get(url);
    const { data } = response;
    setCast(data.results);
  }

  useEffect(() => {
    fetchReviewsMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h2>Author: {review.author}</h2>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
};