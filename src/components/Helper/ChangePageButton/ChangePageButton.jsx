import React from 'react';
import Button from './ChangePageButton.Styles';

const ChangePageButton = ({ changePage }) => (
  <Button onClick={changePage} id="changePageButton">
    change page
  </Button>
);

export default ChangePageButton;
