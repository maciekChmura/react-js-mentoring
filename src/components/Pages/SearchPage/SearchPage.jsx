import React, { Component } from 'react';
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
    console.log(props.match.params);
    console.log(searchValue);
    if (term && term !== searchValue) {
      getSearchData(term, sortingTypeForSearch[sortingType], searchOption);
      updateSearchValue(term);
    }
    return state;
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (prevProps.location !== this.props.location) {
  //     console.log('props changed');
  //   }
  //   console.log(prevProps);
  //   console.log(this.props);
  //   console.log(this.props.history);
  //   this.props.history.listen(location, action => {
  //     console.log('listen triggered');
  //   });
  // }

  performSearch = searchString => {
    // const { sortingType, searchOption, getSearchData, error } = this.props;
    // console.log(searchString);
    // getSearchData(
    //   searchString,
    //   sortingTypeForSearch[sortingType],
    //   searchOption
    // );

    history.push(`/search/${searchString}`);
    updateSearchValue(searchString);
    console.log(searchString);

    // if (error) {
    //   console.log('Search failed');
    // }
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
