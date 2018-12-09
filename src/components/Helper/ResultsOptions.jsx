import React, { Component } from 'react';
import styled from 'styled-components';
import SortingButton from './SortingButton';

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
    const { dataSize } = this.props;
    return (
      <ResultsOptionsWrapper>
        <InfoWrapper>
          <Display>{dataSize} movies found</Display>
        </InfoWrapper>
        <ButtonsWrapper>
          <Display>Sort by:</Display>
          <SortingButton
            text="release date"
            handleClick={this.props.handleClick}
          />
          <SortingButton text="rating" handleClick={this.props.handleClick} />
        </ButtonsWrapper>
      </ResultsOptionsWrapper>
    );
  }
}

export default ResultsOptions;
