import React, { Component } from 'react';
import {
  Wrapper,
  Display,
  InputWrapper,
  ButtonsWrapper,
  SearchButton
} from './SearchForm.Styles';
import OptionButton from '../../Helper/OptionButton/OptionButton';

class SearchForm extends Component {
  state = {
    searchValue: ''
  };

  handleInputChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleFormSubmit();
    }
  };

  handleFormSubmit = () => {
    this.props.handleFormSubmit(this.state.searchValue);
  };

  render() {
    const { searchOption, changeSearch } = this.props;
    const { searchValue } = this.state;
    return (
      <Wrapper>
        <form onSubmit={this.handleFormSubmit}>
          <InputWrapper
            id="location"
            placeholder="type something"
            value={searchValue}
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
          />

          <ButtonsWrapper>
            <Display>Search by: </Display>
            <OptionButton
              text="title"
              changeOption={changeSearch}
              option={searchOption}
            />
            <OptionButton
              text="genres"
              changeOption={changeSearch}
              option={searchOption}
            />
            <SearchButton onClick={this.handleFormSubmit} type="button">
              Search
            </SearchButton>
          </ButtonsWrapper>
        </form>
      </Wrapper>
    );
  }
}

export default SearchForm;
