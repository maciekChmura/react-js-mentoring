import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  grid-area: 3 / 2 / 3 / 4;
`;

class SearchForm extends Component {
  constructor(props) {
    super(props);
  }

  handleFormSubmit = event => {
    this.props.handleFormSubmit(event.target.value);
    console.log('test');
  };

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleFormSubmit}>
          <input id="location" placeholder="movie" value={this.props.value} />
        </form>
      </Wrapper>
    );
  }
}

export default SearchForm;
