import React from 'react';
import renderer from 'react-test-renderer';
import OptionButton from './OptionButton';

test('OptionButton renders', () => {
  const component = renderer.create(<OptionButton />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
