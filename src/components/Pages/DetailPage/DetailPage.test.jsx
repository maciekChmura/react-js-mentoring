import React from 'react';
import renderer from 'react-test-renderer';
import DetailPage from './DetailPage';

test('DetailPage renders', () => {
  const component = renderer.create(<DetailPage />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
