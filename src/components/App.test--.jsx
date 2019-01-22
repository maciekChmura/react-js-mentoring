import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';

import App from './App';

const mockStore = configureMockStore();
const store = mockStore({});

describe('App', () => {
  test('should render correctly', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });

  it('should render Search as default', () => {
    const component = mount(<App />);
    expect(component.find('SearchPage')).toHaveLength(1);
    component.unmount();
  });

  it('should render Detail when state.pageType is detail', () => {
    const component = mount(<App />);
    expect(component.find('SearchPage')).toHaveLength(1);
    expect(component.find('DetailPage')).toHaveLength(0);
    component.setState({ pageType: 'detail' });
    expect(component.find('SearchPage')).toHaveLength(0);
    expect(component.find('DetailPage')).toHaveLength(1);
    component.unmount();
  });

  it('should render ChangePageButton', () => {
    const component = mount(<App />);
    expect(component.find('ChangePageButton')).toHaveLength(1);
    component.unmount();
  });

  it('changePage changes state when called', () => {
    const component = mount(<App />);

    component.find('ChangePageButton').prop('changePage')();
    expect(component.state('pageType')).toEqual('detail');
    component.find('ChangePageButton').prop('changePage')();
    expect(component.state('pageType')).toEqual('search');
    component.unmount();
  });
});
