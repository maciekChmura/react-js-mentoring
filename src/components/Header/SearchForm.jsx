import React, { Component } from 'react';
import styled from 'styled-components';
import OptionButton from '../Helper/OptionButton';

const Wrapper = styled.div`
  grid-area: 3 / 2 / 3 / 4;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div``;

const ButtonsWrapper = styled.div`
  display: flex;
`;

const Display = styled.p`
  margin: 5px;
  color: white;
`;

class SearchForm extends Component {
  state = {
    searchValue: ''
  };

  handleInputChange = event => {
    this.setState({ searchValue: event.target.value });
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
          <InputWrapper>
            <input
              id="location"
              placeholder="movie"
              value={searchValue}
              onChange={this.handleInputChange}
            />
          </InputWrapper>
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
            <button onClick={this.handleFormSubmit} type="button">
              Search
            </button>
          </ButtonsWrapper>
        </form>
      </Wrapper>
    );
  }
}

export default SearchForm;
