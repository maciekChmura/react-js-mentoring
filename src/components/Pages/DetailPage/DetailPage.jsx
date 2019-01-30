import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MovieDetails from '../../Detail/MovieDetails';
import Detail from './DetailPage.Styles';
import { getMovieDataById } from '../../../redux/actions';
import ChangePageButton from '../../Helper/ChangePageButton/ChangePageButton';
import { ChangePageWrapper } from '../../App.Styles';

const mapStateToProps = state => ({
  movieData: state.selectedMovie
});

class DetailPage extends Component {
  state = {};

  static getDerivedStateFromProps(props, state) {
    const { id } = props.match.params;
    const { getMovieDataById, movieData } = props;
    if (!movieData) {
      getMovieDataById(id);
    }
    return state;
  }

  render() {
    const { movieData } = this.props;
    return (
      <>
        <Detail>
          {movieData ? <MovieDetails details={movieData} /> : <p>loading</p>}
        </Detail>
        <ChangePageWrapper>
          <ChangePageButton />
        </ChangePageWrapper>
      </>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { getMovieDataById }
  )(DetailPage)
);
