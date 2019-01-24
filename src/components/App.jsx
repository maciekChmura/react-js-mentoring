import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './Pages/SearchPage/SearchPage';
import DetailPage from './Pages/DetailPage/DetailPage';
import NotFoundPage from './Pages/NotFound/NotFound';

const mapStateToProps = state => ({
  selectedMovie: state.selectedMovie
});

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={SearchPage} />
          <Route path="/search/:term" component={SearchPage} />
          <Route path="/film/:id" component={DetailPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </>
    );
  }
}

export default connect(mapStateToProps)(App);
