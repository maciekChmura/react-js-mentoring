import React from 'react';
import ResultsWrapper from './Results.Styles';
import MovieTile from '../MovieTile/MovieTile';

const Results = ({ results, changePage }) => (
  <ResultsWrapper>
    {results.map(result => (
      <MovieTile key={result.id} data={result} changePage={changePage} />
    ))}
  </ResultsWrapper>
);

export default Results;
