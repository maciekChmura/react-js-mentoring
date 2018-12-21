import React from 'react';
import renderer from 'react-test-renderer';
import SearchForm from './SearchForm';

test('SearchForm renders', () => {
  const component = renderer.create(<SearchForm />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
