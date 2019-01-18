import React, { Component } from 'react';
import { connect } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import ErrorBoundary from './ErrorBoundary';
import ChangePageButton from './Helper/ChangePageButton/ChangePageButton';
import SearchPage from './Pages/SearchPage/SearchPage';
import DetailPage from './Pages/DetailPage/DetailPage';

import { ChangePageWrapper } from './App.Styles';

const mapStateToProps = state => ({
  selectedMovie: state.selectedMovie
});

class App extends Component {
  // state = {
  //   selectedMovieId: ''
  // };

  // changePage = id => {
  //   this.setState({ selectedMovieId: id });
  // };

  render() {
    const { selectedMovie } = this.props;
    return (
      <ErrorBoundary>
        <GlobalStyle />
        {selectedMovie === '' ? (
          <SearchPage changePage={this.changePage} />
        ) : (
          <DetailPage movieData={selectedMovie} />
        )}
        <ChangePageWrapper>
          {selectedMovie !== '' && (
            <ChangePageButton changePage={this.changePage} />
          )}
          {console.log(selectedMovie)}
        </ChangePageWrapper>
      </ErrorBoundary>
    );
  }
}

export default connect(mapStateToProps)(App);
