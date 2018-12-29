import React from 'react';
import renderer from 'react-test-renderer';
import ResultsOptions from './ResultsOptions';

test('ResultsOptions renders', () => {
  const component = renderer.create(<ResultsOptions />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
