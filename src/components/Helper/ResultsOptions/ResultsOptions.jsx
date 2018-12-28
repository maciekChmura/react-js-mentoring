import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSorting } from '../../../redux/actions';
import { sortingTypeForDisplay } from '../../../utils/sortingTypeConstants';
import {
  ResultsOptionsWrapper,
  ButtonsWrapper,
  Display
} from './ResultsOptions.Styles';
import OptionButton from '../OptionButton/OptionButton';

const mapStateToProps = state => ({
  sortingType: state.sortingType,
  dataSize: state.movies.length
});

class ResultsOptionsRedux extends Component {
  changeSorting = text => {
    this.props.changeSorting(text);
  };

  render() {
    const { sortingType, dataSize } = this.props;
    return (
      <ResultsOptionsWrapper>
        <Display>{dataSize} movies found</Display>
        <ButtonsWrapper>
          <Display>Sort by:</Display>
          {['release date', 'rating'].map(title => (
            <OptionButton
              text={title}
              changeOption={this.changeSorting}
              option={sortingTypeForDisplay[sortingType]}
              key={title}
            />
          ))}
        </ButtonsWrapper>
      </ResultsOptionsWrapper>
    );
  }
}

const ResultsOptions = connect(
  mapStateToProps,
  { changeSorting }
)(ResultsOptionsRedux);

export default ResultsOptions;
