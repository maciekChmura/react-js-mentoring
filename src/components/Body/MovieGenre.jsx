import React, { Component } from 'react';
import styled from 'styled-components';

const MovieGenreWrapper = styled.p`
  font-size: 10px;
  color: dodgerblue;
  margin: 0px;
`;
const MovieGenre = props => {
  return (
    <MovieGenreWrapper>
      {props.genres.map(genre => {
        return <span key={genre}>{`${genre} `}</span>;
      })}
    </MovieGenreWrapper>
  );
};

export default MovieGenre;
