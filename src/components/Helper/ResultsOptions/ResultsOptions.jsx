import React from 'react';
import {
  ResultsOptionsWrapper,
  ButtonsWrapper,
  Display
} from './ResultsOptions.Styles';
import OptionButton from '../OptionButton/OptionButton';

const ResultsOptions = ({ dataSize, changeSorting, sortingType }) => (
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

export default ResultsOptions;
