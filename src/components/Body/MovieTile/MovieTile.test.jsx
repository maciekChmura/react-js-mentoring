import React from 'react';
import { shallow } from 'enzyme';

import { MovieTile } from './MovieTile';

describe('MovieTile', () => {
  const data = {
    poster_path:
      'https://image.tmdb.org/t/p/w500/1Ilv6ryHUv6rt9zIsbSEJUmmbEi.jpg',
    release_date: '2013-04-18',
    title: 'Iron Man 3',
    genres: ['Action', 'Adventure', 'Science Fiction']
  };
  it('should render correctly', () => {
    const component = shallow(<MovieTile data={data} />);

    expect(component).toMatchSnapshot();
  });
});
