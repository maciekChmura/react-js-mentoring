import React, { Component } from 'react';
import styled from 'styled-components';
import OptionButton from '../Helper/OptionButton';

const Wrapper = styled.div`
  grid-area: 3 / 2 / 3 / 4;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.input`
  font-size: 18px;
  border: 0;
  width: 780px;
  height: 24px;
  background: #fff;
  padding: 6px;
  border: 1px solid grey;
  border-radius: 4px;
`;

const ButtonsWrapper = styled.div`
  width: 800px;
  display: flex;
  margin-top: 10px;
`;

const Display = styled.p`
  font-size: 18px;
  margin: 5px;
  padding: 5px;
  color: white;
`;

const SearchButton = styled.button`
  background-color: #dd1133;
  height: 32px;
  border: 0;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 4px 10px 4px 10px;
  padding: 2px 10px 2px 10px;
  margin-left: auto;
`;

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
    event.preventDefault();
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
