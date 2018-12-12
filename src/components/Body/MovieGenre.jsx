import React from 'react';
import styled from 'styled-components';

const MovieGenreWrapper = styled.p`
  font-size: 10px;
  color: black;
  margin: 0px;
`;
const MovieGenre = props => {
  const { genres } = props;
  return (
    <MovieGenreWrapper>
      {genres.map(genre => {
        return <span key={genre}>{`${genre} `}</span>;
      })}
    </MovieGenreWrapper>
  );
};

export default MovieGenre;
