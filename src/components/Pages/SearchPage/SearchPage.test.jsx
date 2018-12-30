import React from 'react';
import { shallow } from 'enzyme';

import { SearchPage } from './SearchPage';

function setup() {
  const props = {
    getDefaultData: jest.fn(),
    getSearchData: jest.fn(),
    movies: ['movie1', 'movie2']
  };

  const enzymeWrapper = shallow(<SearchPage {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('SearchPage', () => {
  it('should render correctly', () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });

  // it('should render loading spinner when no data is in state', () => {
  //   const { component } = setup();

  //   expect(component.find('Results')).toHaveLength(0);
  // });

  // it('should render results when data for movies is in state', () => {
  //   const { component } = setup();
  //   expect(component.find('Results')).toHaveLength(0);
  //   component.setState({ data: 'movies data' });
  //   expect(component.find('Results')).toHaveLength(1);
  // });

  // it('changeSorting changes state when called', () => {
  //   const { component } = setup();

  //   component.find('ResultsOptions').prop('changeSorting')('sortingOne');
  //   expect(component.state('sortingType')).toEqual('sortingOne');
  // });

  // it('changeSearch changes state when called', () => {
  //   const { component } = setup();

  //   component.find('SearchForm').prop('changeSearch')('searchingOne');
  //   expect(component.state('searchOption')).toEqual('searchingOne');
  // });
});
