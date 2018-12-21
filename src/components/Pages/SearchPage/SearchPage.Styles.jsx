import styled from 'styled-components';
import netflixBack from '../../../img/netflix_back.jpg';

export const SearchCSSGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 900px 1fr;
  grid-template-rows: 230px 50px auto;
`;

export const HeaderCSSGrid = styled.div`
  grid-area: 2 / 3 / 1 / 2;
  display: grid;
  grid-template-columns: 50px 800px 50px;
  grid-template-rows: 80px 50px 100px;
  background-image: url(${netflixBack});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Detail = styled.div`
  grid-area: 5 / 2 / 6 / 3;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url(${netflixBack});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;