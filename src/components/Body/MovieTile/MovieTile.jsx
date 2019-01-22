import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../../../redux/actions';
import MovieTileWrapper from './MovieTile.Styles';
import MoviePoster from '../MoviePoster/MoviePoster';
import MovieInfo from '../MovieInfo/MovieInfo';
import MovieGenre from '../MovieGenre/MovieGenre';

export const MovieTile = ({
  data,
  data: { poster_path, title, release_date, genres },
  selectMovie
}) => (
  <MovieTileWrapper onClick={() => selectMovie(data)}>
    <MoviePoster posterImage={poster_path} />
    <MovieInfo title={title} release_date={release_date} />
    <MovieGenre genres={genres} />
  </MovieTileWrapper>
);

export default connect(
  null,
  { selectMovie }
)(MovieTile);
