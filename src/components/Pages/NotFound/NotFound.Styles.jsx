import styled from 'styled-components';
import { backgroundImage } from '../../styleVariables';

const NotFound = styled.div`
  color: white;
  width: 900px;
  height: 500px;
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

export default NotFound;
