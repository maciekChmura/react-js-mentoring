import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDefaultData, getSearchData } from '../../../redux/actions';
import {
  sortingTypeForSearch,
  sortingTypeForDisplay
} from '../../../utils/sortingTypeConstants';
import PageName from '../../Header/PageName/PageName';
import FormTitle from '../../Header/FormTitle/FormTitle';
import SearchForm from '../../Header/SearchForm/SearchForm';
import Results from '../../Body/Results/Results';
import ResultsOptions from '../../Helper/ResultsOptions/ResultsOptions';

import { SearchCSSGrid, HeaderCSSGrid } from './SearchPage.Styles';

const mapStateToProps = state => ({
  movies: state.movies,
  sortingType: state.sortingType,
  searchOption: state.searchOption
});

export class SearchPage extends Component {
  componentDidMount = () => {
    this.props.getDefaultData(12);
  };

  performSearch = searchString => {
    const { sortingType, searchOption } = this.props;
    this.props.getSearchData(
      searchString,
      sortingTypeForSearch[sortingType],
      searchOption
    );
  };

  render() {
    const { movies, sortingType } = this.props;
    return (
      <SearchCSSGrid>
        <HeaderCSSGrid>
          <PageName />
          <FormTitle />
          <SearchForm handleFormSubmit={this.performSearch} />
        </HeaderCSSGrid>
        <ResultsOptions sortingType={sortingTypeForDisplay[sortingType]} />
        {movies ? <Results results={movies} /> : <p>loading</p>}
      </SearchCSSGrid>
    );
  }
}

export default connect(
  mapStateToProps,
  { getDefaultData, getSearchData }
)(SearchPage);
