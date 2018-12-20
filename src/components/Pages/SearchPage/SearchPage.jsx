import React, { Component } from 'react';
import { SearchCSSGrid, HeaderCSSGrid } from './SearchPage.Styles';
import { fetchFromSearch, fetchDefault } from '../../../utils/dataLoaders';
import {
  sortingTypeForSearch,
  sortingTypeForDisplay
} from '../../../utils/sortingTypeConstants';
import PageName from '../../Header/PageName/PageName';
import FormTitle from '../../Header/FormTitle/FormTitle';
import SearchForm from '../../Header/SearchForm/SearchForm';
import Results from '../../Body/Results/Results';
import ResultsOptions from '../../Helper/ResultsOptions/ResultsOptions';

class SearchPage extends Component {
  state = {
    data: '',
    sortingType: 'release date',
    searchOption: 'title'
  };

  componentDidMount = () => {
    fetchDefault(12).then(data =>
      this.setState(state => ({ data: data.data }))
    );
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

  add(x) {
    return x + 2;
  }

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
          dataSize={data.length}
          changeSorting={this.changeSorting}
          sortingType={sortingTypeForDisplay[sortingType]}
        />
        {data ? <Results results={data} /> : <p>loading</p>}
      </SearchCSSGrid>
    );
  }
}

export default SearchPage;
