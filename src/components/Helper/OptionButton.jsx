import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: ${props => (props.option === props.text ? 'salmon' : 'white')};
  margin: 5px;
  background-color: lightblue;
`;

class OptionButton extends Component {
  render() {
    const { changeOption, option, text } = this.props;
    return (
      <Button onClick={() => changeOption(text)} option={option} text={text}>
        {text}
      </Button>
    );
  }
}

export default OptionButton;
