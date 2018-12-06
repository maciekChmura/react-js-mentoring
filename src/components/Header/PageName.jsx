import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  grid-area: 2 / 3 / 1 / 2;
  font-size: 20px;
  color: red;
  width: auto;
  padding: 10px;
`;

const PageName = () => <H1>Netflix Roulette</H1>;

export default PageName;
