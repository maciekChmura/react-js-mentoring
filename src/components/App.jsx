import React from 'react';
import styled from 'styled-components';

const MainCSSGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 900px 1fr;
  grid-template-rows: 230px 50px auto 50px;

  * {
    border: 1px solid red;
  }
`;

const HeaderCSSGrid = styled.div`
  grid-area: 2 / 3 / 1 / 2;
  display: grid;
  grid-template-columns: 50px 800px 50px;
  grid-template-rows: 80px 50px 50px 50px;
`;

const App = () => ({
  render() {
    return (
      <MainCSSGrid>
        <HeaderCSSGrid />
      </MainCSSGrid>
    );
  }
});

export default App;
