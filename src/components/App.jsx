import React, { Component } from 'react';
import styled from 'styled-components';
import PageName from './Header/PageName';
import GlobalStyle from './GlobalStyle';
import netflixBack from '../img/netflix_back.jpg';
import FormTitle from './Header/FormTitle';
import SearchForm from './Header/SearchForm';
import Results from './Body/Results';
import ResultsOptions from './Helper/ResultsOptions';

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

const Footer = styled.div`
  grid-area: 4 / 2 / 5 / 3;
`;

class App extends Component {
  state = {
    data: [],
    sortedData: [],
    sortingType: 'release'
  };

  performSearch = data => {
    console.log(data);
  };

  componentDidMount = () => {
    fetch('http://react-cdp-api.herokuapp.com/movies')
      .then(response => response.json())
      .then(data => this.setState({ data: data.data }));
  };

  handleClick = data => {
    console.log(data);
    this.setState({ sortingType: data });
  };

  render() {
    const { data, sortedData } = this.state;
    return (
      <MainCSSGrid>
        <GlobalStyle />
        <HeaderCSSGrid>
          <PageName />
          <FormTitle />
          <SearchForm handleFormSubmit={this.performSearch} />
        </HeaderCSSGrid>
        <ResultsOptions dataSize={data.length} handleClick={this.handleClick} />
        {data ? <Results results={data} /> : <p>loader</p>}
        <Footer />
      </MainCSSGrid>
    );
  }
}

export default App;
