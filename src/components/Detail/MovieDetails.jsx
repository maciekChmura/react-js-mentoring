import React, { Component } from 'react';
import styled from 'styled-components';
import MoviePoster from '../Body/MoviePoster';

const DetailsWrapper = styled.div`
  width: 800px;
  height: 400px;
  display: flex;
`;

const InfoWrapper = styled.div`
  width: 600px;
  margin: 16px;
`;

const MovieTitle = styled.p`
  font-size: 32px;
  color: #dd1133;
`;

const MovieRating = styled.p`
  font-size: 18px;
  color: white;
`;

const MovieData = styled.p`
  font-size: 14px;
  color: white;
`;

const MovieSummary = styled.p`
  font-size: 14px;
  color: white;
`;

class MovieDetails extends Component {
  render() {
    const { details } = this.props;
    return (
      <DetailsWrapper>
        <MoviePoster posterImage={details.poster_path} />
        <InfoWrapper>
          <MovieTitle>{details.title}</MovieTitle>
          <MovieRating>Rating: {details.vote_average}</MovieRating>
          <MovieData>
            {details.release_date.slice(0, 4)} - {details.runtime}min
          </MovieData>
          <MovieSummary> {details.overview} </MovieSummary>
        </InfoWrapper>
      </DetailsWrapper>
    );
  }
}

export default MovieDetails;
