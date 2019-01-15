import {
  CHANGE_SEARCH,
  CHANGE_SORTING,
  SEARCH_STARTED,
  SEARCH_SUCCESS,
  SEARCH_FAILURE
} from '../constants/action-types';
import { fetchFromSearch } from '../../utils/dataLoaders';

export function changeSearch(searchType) {
  return { type: CHANGE_SEARCH, payload: searchType };
}

export function changeSorting(sortingType) {
  return { type: CHANGE_SORTING, payload: sortingType };
}

export function searchStarted() {
  return { type: SEARCH_STARTED };
}

export function searchFailure() {
  return { type: SEARCH_FAILURE };
}

export function getSearchData(searchString, sortingType, searchOption) {
  return function thunk(dispatch) {
    dispatch({ type: SEARCH_STARTED });
    return fetchFromSearch(searchString, sortingType, searchOption)
      .then(json => {
        dispatch({ type: SEARCH_SUCCESS, payload: json.data });
      })
      .catch(err => {
        dispatch({ type: SEARCH_FAILURE });
      });
  };
}
