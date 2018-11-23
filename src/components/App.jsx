import React from 'react';
import HelloOne from './HelloOne';
import HelloTwo from './HelloTwo';
import HelloThree from './HelloThree';
import HelloFour from './HelloFour';

const App = () => ({
  render() {
    return (
      <>
        <HelloOne />
        <HelloTwo />
        <HelloThree />
        <HelloFour />
      </>
    );
  }
});

export default App;
