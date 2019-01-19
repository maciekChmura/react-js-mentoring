import React from 'react';
import { connect } from 'react-redux';
import { unSelectMovie } from '../../../redux/actions';
import Button from './ChangePageButton.Styles';

export const ChangePageButton = ({ unSelectMovie }) => (
  <Button onClick={() => unSelectMovie()} id="changePageButton">
    go back
  </Button>
);

export default connect(
  null,
  { unSelectMovie }
)(ChangePageButton);
