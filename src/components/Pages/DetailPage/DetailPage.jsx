import React from 'react';
import { connect } from 'react-redux';
import MovieDetails from '../../Detail/MovieDetails';
import Detail from './DetailPage.Styles';

const mapStateToProps = state => ({
  movieData: state.selectedMovie
});

const DetailPage = ({ movieData }) => (
  <Detail>
    {movieData ? <MovieDetails details={movieData} /> : <p>loading</p>}
  </Detail>
);

export default connect(mapStateToProps)(DetailPage);
