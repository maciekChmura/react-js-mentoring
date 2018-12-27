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
    pageType: 'search'
  };

  changePage = () => {
    const { pageType } = this.state;
    const newType = pageType === 'search' ? 'detail' : 'search';
    this.setState(state => ({ pageType: newType }));
  };

  render() {
    const { pageType } = this.state;
    return (
      <Provider store={store}>
        <ErrorBoundary>
          <GlobalStyle />
          {pageType === 'search' ? <SearchPage /> : <DetailPage />}
          <ChangePageWrapper>
            <ChangePageButton changePage={this.changePage} />
          </ChangePageWrapper>
        </ErrorBoundary>
      </Provider>
    );
  }
}

export default App;
