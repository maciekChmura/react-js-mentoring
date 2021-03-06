import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './Loading';

test('Loading renders', () => {
  const component = renderer.create(<Loading />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
