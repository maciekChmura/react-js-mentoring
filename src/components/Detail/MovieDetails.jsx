import React from 'react';
import MoviePoster from '../Body/MoviePoster/MoviePoster';
import {
  DetailsWrapper,
  InfoWrapper,
  MovieTitle,
  MovieRating,
  MovieData,
  MovieSummary
} from './MovieDetails.Styles';

const MovieDetails = ({ details }) => {
  const releaseDate = details.release_date.slice(0, 4);
  return (
    <DetailsWrapper>
      <MoviePoster posterImage={details.poster_path} />
      <InfoWrapper>
        <MovieTitle>{details.title}</MovieTitle>
        <MovieRating>Rating: {details.vote_average}</MovieRating>
        <MovieData>
          {releaseDate} - {details.runtime}min
        </MovieData>
        <MovieSummary> {details.overview} </MovieSummary>
      </InfoWrapper>
    </DetailsWrapper>
  );
};

export default MovieDetails;
