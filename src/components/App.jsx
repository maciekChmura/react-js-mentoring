import React, { Component } from 'react';
import styled from 'styled-components';
import PageName from './Header/PageName';
import GlobalStyle from './GlobalStyle';
import netflixBack from '../img/netflix_back.jpg';
import FormTitle from './Header/FormTitle';
import SearchForm from './Header/SearchForm';

const MainCSSGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 900px 1fr;
  grid-template-rows: 230px 50px auto 50px;
`;

const HeaderCSSGrid = styled.div`
  grid-area: 2 / 3 / 1 / 2;
  display: grid;
  grid-template-columns: 50px 800px 50px;
  grid-template-rows: 80px 50px 50px 50px;
  background-image: url(${netflixBack});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

class App extends Component {
  state = {
    movie: 'test',
    searchString: ''
  };

  render() {
    return (
      <MainCSSGrid>
        <GlobalStyle />
        <HeaderCSSGrid>
          <PageName />
          <FormTitle />
          <SearchForm />
        </HeaderCSSGrid>
      </MainCSSGrid>
    );
  }
}

export default App;
