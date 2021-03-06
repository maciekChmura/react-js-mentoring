import React from 'react';
import { shallow } from 'enzyme';
import DetailPage from './DetailPage';

describe('DetailPage', () => {
  it('should render correctly', () => {
    const component = shallow(<DetailPage />);

    expect(component).toMatchSnapshot();
  });

  it('should render MovieDetails when state.movie has data', () => {
    const component = shallow(<DetailPage />);
    component.prop({ movieData: '' });
    expect(component.find('MovieDetails')).toHaveLength(0);
    component.prop({ movieData: 'test' });
    expect(component.find('MovieDetails'));
  });
});
