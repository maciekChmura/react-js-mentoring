import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchData } from '../../../redux/actions';
import {
  sortingTypeForSearch,
  sortingTypeForDisplay
} from '../../../utils/sortingTypeConstants';
import PageName from '../../Header/PageName/PageName';
import FormTitle from '../../Header/FormTitle/FormTitle';
import SearchForm from '../../Header/SearchForm/SearchForm';
import Results from '../../Body/Results/Results';
import ResultsOptions from '../../Helper/ResultsOptions/ResultsOptions';
import LoadingWrapper from '../../Helper/Loading/Loading';

import { SearchCSSGrid, HeaderCSSGrid } from './SearchPage.Styles';

const mapStateToProps = state => ({
  movies: state.movies,
  sortingType: state.sortingType,
  searchOption: state.searchOption,
  isSearching: state.isSearching,
  error: state.isSearching
});

export class SearchPage extends Component {
  performSearch = searchString => {
    const { sortingType, searchOption, getSearchData, error } = this.props;
    getSearchData(
      searchString,
      sortingTypeForSearch[sortingType],
      searchOption
    );
    if (error) {
      console.log('Search failed');
    }
  };

  render() {
    const { movies, sortingType, changePage, isSearching } = this.props;
    return (
      <SearchCSSGrid>
        <HeaderCSSGrid>
          <PageName />
          <FormTitle />
          <SearchForm handleFormSubmit={this.performSearch} />
        </HeaderCSSGrid>
        <ResultsOptions sortingType={sortingTypeForDisplay[sortingType]} />
        {isSearching ? (
          <LoadingWrapper />
        ) : (
          movies.length !== 0 && (
            <Results results={movies} changePage={changePage} />
          )
        )}
      </SearchCSSGrid>
    );
  }
}

export default connect(
  mapStateToProps,
  { getSearchData }
)(SearchPage);
