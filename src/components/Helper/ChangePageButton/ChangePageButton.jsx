import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { unSelectMovie } from '../../../redux/actions';

import Button from './ChangePageButton.Styles';

export const ChangePageButton = ({ unSelectMovie }) => (
  <Link to="/" onClick={() => unSelectMovie()}>
    <Button id="changePageButton">go back</Button>
  </Link>
);

export default connect(
  null,
  { unSelectMovie }
)(ChangePageButton);
