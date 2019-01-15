import React from 'react';
import Button from './ChangePageButton.Styles';

const ChangePageButton = ({ changePage }) => (
  <Button onClick={changePage} id="changePageButton">
    go back
  </Button>
);

export default ChangePageButton;
