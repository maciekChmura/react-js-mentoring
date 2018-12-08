import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  grid-area: 3 / 2 / 3 / 4;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div``;

const ButtonsWrapper = styled.div``;

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
    return (
      <Wrapper>
        <form onSubmit={this.handleFormSubmit}>
          <InputWrapper>
            <input
              id="location"
              placeholder="movie"
              value={this.state.searchValue}
              onChange={this.handleInputChange}
            />
          </InputWrapper>
          <ButtonsWrapper>
            <button onClick={this.handleFormSubmit}>Search</button>
          </ButtonsWrapper>
        </form>
      </Wrapper>
    );
  }
}

export default SearchForm;
