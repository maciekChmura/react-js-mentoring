import styled from 'styled-components';
import { backgroundImage } from '../../styleVariables';

const Detail = styled.div`
  width: 900px;
  margin: auto;
  padding: 20px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Detail;
