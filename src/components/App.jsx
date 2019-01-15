import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import GlobalStyle from './GlobalStyle';
import ErrorBoundary from './ErrorBoundary';
import ChangePageButton from './Helper/ChangePageButton/ChangePageButton';
import SearchPage from './Pages/SearchPage/SearchPage';
import DetailPage from './Pages/DetailPage/DetailPage';

import { ChangePageWrapper } from './App.Styles';

class App extends Component {
  state = {
    pageType: 'search',
    selectedMovieId: ''
  };

  changePage = id => {
    const { pageType } = this.state;
    const newType = pageType === 'search' ? 'detail' : 'search';
    this.setState({ pageType: newType, selectedMovieId: id });
  };

  render() {
    const { pageType, selectedMovieId } = this.state;
    return (
      <Provider store={store}>
        <ErrorBoundary>
          <GlobalStyle />
          {pageType === 'search' ? (
            <SearchPage changePage={this.changePage} />
          ) : (
            <DetailPage movieId={selectedMovieId} />
          )}
          <ChangePageWrapper>
            {pageType !== 'search' && (
              <ChangePageButton changePage={this.changePage} />
            )}
          </ChangePageWrapper>
        </ErrorBoundary>
      </Provider>
    );
  }
}

export default App;
