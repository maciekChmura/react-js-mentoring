import React from 'react';
import { shallow } from 'enzyme';

import SearchPage from './SearchPage';

describe('SearchPage', () => {
  it('should render correctly', () => {
    const component = shallow(<SearchPage />);

    expect(component).toMatchSnapshot();
  });

  it('should render looading spinner when no data is in state', () => {
    const component = shallow(<SearchPage />);
    expect(component.find('Results')).toHaveLength(0);
  });

  it('should render results when data for movies is in state', () => {
    const component = shallow(<SearchPage />);
    expect(component.find('Results')).toHaveLength(0);
    component.setState({ data: 'movies data' });
    expect(component.find('Results')).toHaveLength(1);
  });

  it('changeSorting changes state when called', () => {
    const component = shallow(<SearchPage />);

    component.find('ResultsOptions').prop('changeSorting')('sortingOne');
    expect(component.state('sortingType')).toEqual('sortingOne');
  });
});
