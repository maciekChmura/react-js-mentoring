import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFromSearch, fetchDefault } from '../../../utils/dataLoaders';
import { getData } from '../../../redux/actions';
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

const mapStateToProps = state => ({ results: state.results });

class SearchPageRedux extends Component {
  state = {
    // data: '',
    sortingType: 'release date',
    searchOption: 'title'
  };

  componentDidMount = () => {
    this.props.getData();
  };

  changeSorting = data => {
    this.setState(state => ({ sortingType: data }));
  };

  performSearch = searchString => {
    const { sortingType, searchOption } = this.state;
    fetchFromSearch(
      searchString,
      sortingTypeForSearch[sortingType],
      searchOption
    ).then(data => this.setState(state => ({ data: data.data })));
  };

  changeSearch = data => {
    event.preventDefault();
    this.setState(state => ({ searchOption: data }));
  };

  render() {
    const { data, sortingType, searchOption } = this.state;

    return (
      <SearchCSSGrid>
        <HeaderCSSGrid>
          <PageName />
          <FormTitle />
          <SearchForm
            handleFormSubmit={this.performSearch}
            searchOption={searchOption}
            changeSearch={this.changeSearch}
          />
        </HeaderCSSGrid>
        <ResultsOptions
          dataSize={this.props.results.length}
          changeSorting={this.changeSorting}
          sortingType={sortingTypeForDisplay[sortingType]}
        />
        {this.props.results ? (
          <Results results={this.props.results} />
        ) : (
          <p>loading</p>
        )}
      </SearchCSSGrid>
    );
  }
}

const SearchPage = connect(
  mapStateToProps,
  { getData }
)(SearchPageRedux);

export default SearchPage;
