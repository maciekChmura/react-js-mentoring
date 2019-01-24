import React from 'react';
import { connect } from 'react-redux';
import MovieDetails from '../../Detail/MovieDetails';
import Detail from './DetailPage.Styles';
import ChangePageButton from '../../Helper/ChangePageButton/ChangePageButton';
import { ChangePageWrapper } from '../../App.Styles';

const mapStateToProps = state => ({
  movieData: state.selectedMovie
});

const DetailPage = ({ movieData }) => (
  <>
    <Detail>
      {movieData ? <MovieDetails details={movieData} /> : <p>loading</p>}
    </Detail>
    <ChangePageWrapper>
      <ChangePageButton />
    </ChangePageWrapper>
  </>
);

export default connect(mapStateToProps)(DetailPage);
