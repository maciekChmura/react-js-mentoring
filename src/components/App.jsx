import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChangePageButton from './Helper/ChangePageButton/ChangePageButton';
import SearchPage from './Pages/SearchPage/SearchPage';
import DetailPage from './Pages/DetailPage/DetailPage';
import NotFoundPage from './Pages/NotFound/NotFound';

import { ChangePageWrapper } from './App.Styles';

const mapStateToProps = state => ({
  selectedMovie: state.selectedMovie
});

class App extends Component {
  render() {
    const { selectedMovie } = this.props;
    return (
      <>
        <Switch>
          <Route path="/" exact component={SearchPage} />
          <Route path="/search/:term" component={SearchPage} />
          <Route path="/film/:id" component={DetailPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>

        {/* {selectedMovie === '' ? (
          <SearchPage />
        ) : (
          <DetailPage movieData={selectedMovie} />
        )} */}
        {selectedMovie !== null && (
          <ChangePageWrapper>
            <ChangePageButton changePage={this.changePage} />
          </ChangePageWrapper>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps)(App);
