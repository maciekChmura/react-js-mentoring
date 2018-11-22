import React, { Component, PureComponent } from 'react';
import { render } from 'react-dom';

const HelloOne = () =>
  React.createElement('h1', {}, 'Hello from create Element');

const HelloTwo = () => <h1>Hello from functional component</h1>;

class HelloThree extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  render() {
    return <h1>Hello from component</h1>;
  }
}

class HelloFour extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  render() {
    return <h1>Hello from pure component</h1>;
  }
}

const App = () => ({
  render() {
    return (
      <div>
        <HelloOne />
        <HelloTwo />
        <HelloThree />
        <HelloFour />
      </div>
    );
  }
});

render(<App />, document.getElementById('root'));
