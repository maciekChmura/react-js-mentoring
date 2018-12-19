import React, { Component } from 'react';
import { MainCSSGrid, HeaderCSSGrid, Footer, Detail } from './App.Styles';
import PageName from './Header/PageName/PageName';
import GlobalStyle from './GlobalStyle';
import FormTitle from './Header/FormTitle/FormTitle';
import SearchForm from './Header/SearchForm/SearchForm';
import Results from './Body/Results/Results';
import ResultsOptions from './Helper/ResultsOptions/ResultsOptions';
import MovieDetails from './Detail/MovieDetails';
import ErrorBoundary from './ErrorBoundary';
import { fetchFromSearch, fetchDefault, fetchById } from '../utils/dataLoaders';
import {
  sortingTypeForSearch,
  sortingTypeForDisplay
} from '../utils/sortingTypeConstants';

class App extends Component {
  state = {
    data: '',
    sortingType: 'release date',
    searchOption: 'title',
    movie: ''
  };

  performSearch = searchString => {
    const { sortingType, searchOption } = this.state;
    fetchFromSearch(
      searchString,
      sortingTypeForSearch[sortingType],
      searchOption
    ).then(data => this.setState(state => ({ data: data.data })));
  };

  componentDidMount = () => {
    fetchDefault(12).then(data =>
      this.setState(state => ({ data: data.data }))
    );

    // temporary fetch, just to present movie details
    fetchById(12).then(data => this.setState(state => ({ movie: data })));
  };

  changeSorting = data => {
    this.setState({ sortingType: data });
  };

  changeSearch = data => {
    event.preventDefault();
    this.setState({ searchOption: data });
  };

  render() {
    const { data, sortingType, searchOption, movie } = this.state;
    return (
      <ErrorBoundary>
        <MainCSSGrid>
          <GlobalStyle />
          <HeaderCSSGrid>
            <PageName />
            <FormTitle />
            <SearchForm
              handleFormSubmit={this.performSearch}
              searchOption={searchOption}
              changeSearch={this.changeSearch}
            />
          </HeaderCSSGrid>
          <ResultsOptions
            dataSize={data.length}
            changeSorting={this.changeSorting}
            sortingType={sortingTypeForDisplay[sortingType]}
          />
          {data ? <Results results={data} /> : <p>loading</p>}
          <Footer />
          <Detail>
            {movie ? <MovieDetails details={movie} /> : <p>loading</p>}
          </Detail>
        </MainCSSGrid>
      </ErrorBoundary>
    );
  }
}

export default App;
