import React from 'react';
import { PosterWrapper, Img } from './MoviePoster.Styles';

const MoviePoster = ({ posterImage }) => (
  <PosterWrapper>
    <Img src={posterImage} />
  </PosterWrapper>
);

export default MoviePoster;
