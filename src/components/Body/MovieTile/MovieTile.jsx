import React from 'react';
import MovieTileWrapper from './MovieTile.Styles';
import MoviePoster from '../MoviePoster/MoviePoster';
import MovieInfo from '../MovieInfo/MovieInfo';
import MovieGenre from '../MovieGenre/MovieGenre';

const MovieTile = ({ data: { poster_path, title, release_date, genres } }) => (
  <MovieTileWrapper>
    <MoviePoster posterImage={poster_path} />
    <MovieInfo title={title} release_date={release_date} />
    <MovieGenre genres={genres} />
  </MovieTileWrapper>
);

export default MovieTile;
