import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 5px;
  background-color: lightblue;
`;

class SortingButton extends Component {
  handleClick = () => {
    console.log(this.props.text);
  };

  render() {
    return (
      <Button onClick={() => this.props.handleClick(this.props.text)}>
        {this.props.text}
      </Button>
    );
  }
}

export default SortingButton;
