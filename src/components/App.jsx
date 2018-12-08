import React, { Component } from 'react';
import styled from 'styled-components';
import PageName from './Header/PageName';
import GlobalStyle from './GlobalStyle';
import netflixBack from '../img/netflix_back.jpg';
import FormTitle from './Header/FormTitle';
import SearchForm from './Header/SearchForm';
import Results from './Body/Results';

const MainCSSGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 900px 1fr;
  grid-template-rows: 230px 50px auto 50px;
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

const ResultsOptions = styled.div`
  grid-area: 2 / 2 / 3 / 3;
`;

const Footer = styled.div`
  grid-area: 4 / 2 / 5 / 3;
`;

class App extends Component {
  state = {
    data: []
  };

  performSearch = data => {
    console.log(data);
  };

  componentDidMount = () => {
    fetch('http://react-cdp-api.herokuapp.com/movies')
      .then(response => response.json())
      .then(data => this.setState({ data: data.data }));
  };

  render() {
    return (
      <MainCSSGrid>
        <GlobalStyle />
        <HeaderCSSGrid>
          <PageName />
          <FormTitle />
          <SearchForm handleFormSubmit={this.performSearch} />
        </HeaderCSSGrid>
        <ResultsOptions />
        {this.state.data ? (
          <Results results={this.state.data} />
        ) : (
          <p>loader</p>
        )}
        <Footer />
      </MainCSSGrid>
    );
  }
}

export default App;
