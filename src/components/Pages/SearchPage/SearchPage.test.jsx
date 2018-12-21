import React from 'react';
import renderer from 'react-test-renderer';
import SearchPage from './SearchPage';

test('SearchPage renders', () => {
  const component = renderer.create(<SearchPage />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
