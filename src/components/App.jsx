import React, { Component } from 'react';
import { ChangePageWrapper } from './App.Styles';
import GlobalStyle from './GlobalStyle';
import ErrorBoundary from './ErrorBoundary';
import ChangePageButton from './Helper/ChangePageButton/ChangePageButton';
import SearchPage from './Pages/SearchPage/SearchPage';
import DetailPage from './Pages/DetailPage/DetailPage';

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
      <ErrorBoundary>
        <GlobalStyle />
        {pageType === 'search' ? <SearchPage /> : <DetailPage />}
        <ChangePageWrapper>
          <ChangePageButton changePage={this.changePage} />
        </ChangePageWrapper>
      </ErrorBoundary>
    );
  }
}

export default App;
