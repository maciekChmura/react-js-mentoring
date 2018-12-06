import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  grid-area: 2 / 2 / 3 / 3;
  font-size: 18px;
  color: white;
  width: auto;
  height: auto;
`;

const FormTitle = () => <H2>FIND YOUR MOVIE</H2>;

export default FormTitle;
