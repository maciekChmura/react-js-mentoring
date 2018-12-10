import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: ${props => (props.sortingType === props.text ? 'salmon' : 'white')};
  margin: 5px;
  background-color: lightblue;
`;

class SortingButton extends Component {
  render() {
    const { changeSorting, sortingType, text } = this.props;
    return (
      <Button
        onClick={() => changeSorting(text)}
        sortingType={sortingType}
        text={text}
      >
        {text}
      </Button>
    );
  }
}

export default SortingButton;
