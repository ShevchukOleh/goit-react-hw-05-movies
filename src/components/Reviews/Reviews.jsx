import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Container, ListItem, Text, Title } from './Reviews.styled';
const { useParams } = require('react-router-dom');

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '11c18f4587e0f81a9d7265ade8abe4b9';

const Reviews = () => {
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
    fetchReviewsMovie(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  
  return (
    <Container>
      <ul>
        {reviews.length !== 0 ? reviews.map(review => (
          <ListItem key={review.id}>
            <Title>&bull; Author: {review.author}</Title>
            <Text>{review.content}</Text>
          </ListItem>
        )) : `We don't have any reviews for this movie.`}
      </ul>
    </Container>
  )
};

Reviews.propTypes = {
  movieId: PropTypes.number,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

export default Reviews;