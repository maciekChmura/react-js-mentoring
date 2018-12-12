import React, { Component } from 'react';
import styled from 'styled-components';
import MoviePoster from './MoviePoster';
import MovieInfo from './MovieInfo';
import MovieGenre from './MovieGenre';

const MovieTileWrapper = styled.div`
  width: 200px;
  height: 380px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 6px;
`;

class MovieTile extends Component {
  render() {
    const { poster_path, title, release_date, genres } = this.props.data;
    return (
      <MovieTileWrapper>
        <MoviePoster posterImage={poster_path} />
        <MovieInfo title={title} release_date={release_date} />
        <MovieGenre genres={genres} />
      </MovieTileWrapper>
    );
  }
}

export default MovieTile;
