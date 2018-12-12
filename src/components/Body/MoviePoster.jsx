import React from 'react';
import styled from 'styled-components';

const PosterWrapper = styled.div`
  width: 200px;
  height: 300px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
`;

const MoviePoster = props => {
  return (
    <PosterWrapper>
      <Img src={props.posterImage} />
    </PosterWrapper>
  );
};

export default MoviePoster;
