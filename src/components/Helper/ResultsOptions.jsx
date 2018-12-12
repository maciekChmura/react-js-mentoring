import React, { Component } from 'react';
import styled from 'styled-components';
import OptionButton from './OptionButton';

const ResultsOptionsWrapper = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  justify-content: space-between;
  background-color: #eee;
`;

const ButtonsWrapper = styled.div`
  display: flex;
`;

const Display = styled.p`
  font-size: 18px;
  margin: 5px;
  padding: 5px;
`;

class ResultsOptions extends Component {
  render() {
    const { dataSize, changeSorting, sortingType } = this.props;
    return (
      <ResultsOptionsWrapper>
        <Display>{dataSize} movies found</Display>
        <ButtonsWrapper>
          <Display>Sort by:</Display>
          <OptionButton
            text="release date"
            changeOption={changeSorting}
            option={sortingType}
          />
          <OptionButton
            text="rating"
            changeOption={changeSorting}
            option={sortingType}
          />
        </ButtonsWrapper>
      </ResultsOptionsWrapper>
    );
  }
}

export default ResultsOptions;
