import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  height: 180px;
  background-image: url(${(props) =>
    `https://image.tmdb.org/t/p/w300${props.bgUrl}`});
  background-size: cover;
  background-position: center center;
  border-radius: 4px;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  font-size: 12px;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image bgUrl={imageUrl} />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>
          {''}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.number.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};
export default Poster;
