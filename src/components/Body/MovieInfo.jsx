import React, { Component } from 'react';
import styled from 'styled-components';

const MovieInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 14px;
  color: black;
  margin: 5px;
`;

const Year = styled.p`
  color: black;
  font-size: 14px;
  margin: 5px;
`;

const MovieInfo = props => {
  return (
    <MovieInfoWrapper>
      <Title>{props.title}</Title>
      <Year>{props.release_date.slice(0, 4)}</Year>
    </MovieInfoWrapper>
  );
};

export default MovieInfo;
