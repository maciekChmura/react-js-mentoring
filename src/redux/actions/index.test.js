import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import * as actions from './index';
import * as types from '../constants/action-types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockState = {
  search: {
    searchBy: 'title',
    searchStr: 'fifty'
  },
  sortBy: 'release_date',
  movies: {
    movieData: ['fifty']
  }
};

const buildMockStore = () => mockStore();

describe('actions', () => {
  it('call to changeSearch should return change search action', () => {
    const payload = 'title';
    const expectedAction = {
      type: types.CHANGE_SEARCH,
      payload
    };
    expect(actions.changeSearch(payload)).toEqual(expectedAction);
  });

  it('call to changeSorting should return change sorting action', () => {
    const payload = 'rating';
    const expectedAction = {
      type: types.CHANGE_SORTING,
      payload
    };
    expect(actions.changeSorting(payload)).toEqual(expectedAction);
  });

  it('call to searchStarted should return search started action', () => {
    const expectedAction = {
      type: types.SEARCH_STARTED
    };
    expect(actions.searchStarted()).toEqual(expectedAction);
  });

  it('call to searchFailure should return search failure action', () => {
    const expectedAction = {
      type: types.SEARCH_FAILURE
    };
    expect(actions.searchFailure()).toEqual(expectedAction);
  });

  it('getSearchData should should return searchStarted and searchSuccess action', () => {
    const expectedActions = [types.SEARCH_STARTED, types.SEARCH_SUCCESS];
    fetchMock.getOnce(
      'http://react-cdp-api.herokuapp.com/movies?search=fifty&searchBy=title&sortBy=undefined&sortOrder=desc',
      {
        body: mockState,
        headers: { 'content-type': 'application/json' }
      }
    );

    const store = buildMockStore();
    const actualActions = ['SEARCH_STARTED', 'SEARCH_SUCCESS'];
    return store.dispatch(actions.getSearchData()).then(() => {
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
