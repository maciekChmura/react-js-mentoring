import React, { Component } from 'react';
import styled from 'styled-components';
import PageName from './Header/PageName';
import GlobalStyle from './GlobalStyle';
import netflixBack from '../img/netflix_back.jpg';
import FormTitle from './Header/FormTitle';
import SearchForm from './Header/SearchForm';
import Results from './Body/Results';
import ResultsOptions from './Helper/ResultsOptions';
import MovieDetails from './Detail/MovieDetails';

const MainCSSGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 900px 1fr;
  grid-template-rows: 230px 50px auto 50px 500px;
`;

const HeaderCSSGrid = styled.div`
  grid-area: 2 / 3 / 1 / 2;
  display: grid;
  grid-template-columns: 50px 800px 50px;
  grid-template-rows: 80px 50px 100px;
  background-image: url(${netflixBack});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Footer = styled.div`
  grid-area: 4 / 2 / 5 / 3;
  background-color: lightgrey;
`;

const Detail = styled.div`
  grid-area: 5 / 2 / 6 / 3;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url(${netflixBack});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

class App extends Component {
  state = {
    data: [],
    sortingType: 'release date',
    searchOption: 'title',
    movie: ''
  };

  performSearch = searchString => {
    const { sortingType, searchOption } = this.state;
    fetch(
      `http://react-cdp-api.herokuapp.com/movies?sortBy=${sortingType.replace(
        ' ',
        '_'
      )}&sortOrder=desc&search=${searchString}&searchBy=${searchOption}&limit=12`
    )
      .then(response => response.json())
      .then(data => this.setState({ data: data.data }));
  };

  componentDidMount = () => {
    fetch('http://react-cdp-api.herokuapp.com/movies?limit=12')
      .then(response => response.json())
      .then(data => this.setState({ data: data.data }));

    // temporary fetch, just to present movie details
    fetch('http://react-cdp-api.herokuapp.com/movies/12')
      .then(response => response.json())
      .then(data => this.setState({ movie: data }));
  };

  changeSorting = data => {
    console.log(data);
    this.setState({ sortingType: data });
  };

  changeSearch = data => {
    event.preventDefault(); // TODO probably bad solution
    this.setState({ searchOption: data });
  };

  render() {
    const { data, sortingType, searchOption, movie } = this.state;
    return (
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
          sortingType={sortingType}
        />
        {data ? <Results results={data} /> : <p>loader</p>}
        <Footer />
        <Detail>
          {movie ? <MovieDetails details={movie} /> : <p>loader</p>}
        </Detail>
      </MainCSSGrid>
    );
  }
}

export default App;
