import React from 'react';
import renderer from 'react-test-renderer';
import FormTitle from './FormTitle';

test('FormTitle renders', () => {
  const component = renderer.create(<FormTitle />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
