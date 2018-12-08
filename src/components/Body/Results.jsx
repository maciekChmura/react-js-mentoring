import React, { Component } from 'react';
import styled from 'styled-components';
import MovieTile from './MovieTile';

const ResultsWrapper = styled.div`
  grid-area: 3 / 2 / 4 / 3;
  min-height: 500px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

class Results extends Component {
  render() {
    return (
      <ResultsWrapper>
        {this.props.results.map(result => (
          <MovieTile key={result.id} data={result} />
        ))}
      </ResultsWrapper>
    );
  }
}

export default Results;
