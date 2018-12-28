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

const mapStateToProps = state => ({ movies: state.movies });

class SearchPageRedux extends Component {
  state = {
    sortingType: 'release date'
  };

  componentDidMount = () => {
    this.props.getDefaultData(12);
  };

  changeSorting = data => {
    this.setState(state => ({ sortingType: data }));
  };

  performSearch = searchString => {
    const { sortingType, searchOption } = this.state;
    this.props.getSearchData(
      searchString,
      sortingTypeForSearch[sortingType],
      searchOption
    );
  };

  render() {
    const { sortingType } = this.state;
    const { movies } = this.props;
    return (
      <SearchCSSGrid>
        <HeaderCSSGrid>
          <PageName />
          <FormTitle />
          <SearchForm handleFormSubmit={this.performSearch} />
        </HeaderCSSGrid>
        <ResultsOptions
          dataSize={movies.length}
          changeSorting={this.changeSorting}
          sortingType={sortingTypeForDisplay[sortingType]}
        />
        {movies ? <Results results={movies} /> : <p>loading</p>}
      </SearchCSSGrid>
    );
  }
}

const SearchPage = connect(
  mapStateToProps,
  { getDefaultData, getSearchData }
)(SearchPageRedux);

export default SearchPage;
