import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import ChangePageButton from './Helper/ChangePageButton/ChangePageButton';
import SearchPage from './Pages/SearchPage/SearchPage';
import DetailPage from './Pages/DetailPage/DetailPage';

import { ChangePageWrapper } from './App.Styles';

const mapStateToProps = state => ({
  selectedMovie: state.selectedMovie
});

class App extends Component {
  render() {
    const { selectedMovie } = this.props;
    return (
      <ErrorBoundary>
        {selectedMovie === '' ? (
          <SearchPage />
        ) : (
          <DetailPage movieData={selectedMovie} />
        )}
        <ChangePageWrapper>
          {selectedMovie !== '' && (
            <ChangePageButton changePage={this.changePage} />
          )}
        </ChangePageWrapper>
      </ErrorBoundary>
    );
  }
}

export default connect(mapStateToProps)(App);
