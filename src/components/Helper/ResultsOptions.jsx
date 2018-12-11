import React, { Component } from 'react';
import styled from 'styled-components';
import OptionButton from './OptionButton';

const ResultsOptionsWrapper = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  justify-content: space-between;
`;

const InfoWrapper = styled.div``;

const ButtonsWrapper = styled.div`
  display: flex;
`;

const Display = styled.p`
  margin: 5px;
`;

class ResultsOptions extends Component {
  render() {
    const { dataSize, changeSorting, sortingType } = this.props;
    return (
      <ResultsOptionsWrapper>
        <InfoWrapper>
          <Display>{dataSize} movies found</Display>
        </InfoWrapper>
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
