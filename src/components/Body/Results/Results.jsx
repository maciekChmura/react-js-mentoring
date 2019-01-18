import React from 'react';
import ResultsWrapper from './Results.Styles';
import MovieTile from '../MovieTile/MovieTile';

const Results = ({ results }) => (
  <ResultsWrapper>
    {results.map(result => (
      // console.log(result)
      <MovieTile key={result.id} data={result} />
    ))}
  </ResultsWrapper>
);

export default Results;
