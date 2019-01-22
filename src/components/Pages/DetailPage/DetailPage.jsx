import React from 'react';
import MovieDetails from '../../Detail/MovieDetails';
import Detail from './DetailPage.Styles';

const DetailPage = ({ movieData }) => (
  <Detail>
    {movieData ? <MovieDetails details={movieData} /> : <p>loading</p>}
  </Detail>
);

export default DetailPage;
