import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';
import * as types from '../constants/action-types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should change search option', () => {
    const payload = 'title';
    const expectedAction = {
      type: types.CHANGE_SEARCH,
      payload
    };
    expect(actions.changeSearch(payload)).toEqual(expectedAction);
  });

  it('should change sorting option', () => {
    const payload = 'rating';
    const expectedAction = {
      type: types.CHANGE_SORTING,
      payload
    };
    expect(actions.changeSorting(payload)).toEqual(expectedAction);
  });

  it('should trigger start search', () => {
    const expectedAction = {
      type: types.SEARCH_STARTED
    };
    expect(actions.searchStarted()).toEqual(expectedAction);
  });

  it('should trigger search failure', () => {
    const expectedAction = {
      type: types.SEARCH_FAILURE
    };
    expect(actions.searchFailure()).toEqual(expectedAction);
  });

  it('getSearchData should trigger searchStarted and searchSuccess', () => {
    const expectedActions = [types.SEARCH_STARTED, types.SEARCH_SUCCESS];

    const store = mockStore({ movies: [] });

    return store.dispatch(actions.getSearchData()).then(() => {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
