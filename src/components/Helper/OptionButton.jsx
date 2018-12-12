import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: white;
  height: 32px;
  margin: 4px 10px 4px 10px;
  padding: 2px 10px 2px 10px;
  font-size: 14px;
  background-color: ${props =>
    props.option === props.text ? 'salmon' : '#444'};
  border: 0;
  border-radius: 4px;
  text-transform: uppercase;
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
