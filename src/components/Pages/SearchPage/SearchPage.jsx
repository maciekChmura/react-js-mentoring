import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSearchData, updateSearchValue } from '../../../redux/actions';
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
import history from '../../history';

import { SearchCSSGrid, HeaderCSSGrid } from './SearchPage.Styles';

const mapStateToProps = state => ({
  movies: state.movies,
  sortingType: state.sortingType,
  searchOption: state.searchOption,
  isSearching: state.isSearching,
  error: state.isSearching,
  searchValue: state.searchValue
});

export class SearchPage extends Component {
  state = {};

  static getDerivedStateFromProps(props, state) {
    const { term } = props.match.params; // receiving current search term from URL
    const { searchValue } = props; // receiving stored search term
    const {
      sortingType,
      searchOption,
      getSearchData,
      updateSearchValue
    } = props;
    if (term && term !== searchValue) {
      console.log(term);
      console.log(searchValue);
      // checking whether we should perform new search or not
      getSearchData(term, sortingTypeForSearch[sortingType], searchOption);
      updateSearchValue(term);
      history.push(`/search/${term}`);
    }

    return state;
    // return null;
  }

  performSearch = searchString => {
    const { term } = this.props.match.params;
    const { sortingType, searchOption, getSearchData, error } = this.props;
    console.log(term);

    getSearchData(
      searchString,
      sortingTypeForSearch[sortingType],
      searchOption
    );

    history.push(`/search/${searchString}`);

    if (error) {
      console.log('Search failed');
    }
  };

  render() {
    const { movies, sortingType, isSearching } = this.props;
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
          movies.length !== 0 && <Results results={movies} />
        )}
      </SearchCSSGrid>
    );
  }
}

export default connect(
  mapStateToProps,
  { getSearchData, updateSearchValue }
)(SearchPage);
