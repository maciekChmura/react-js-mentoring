import {
  CHANGE_SEARCH,
  CHANGE_SORTING,
  SEARCH_STARTED,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  SELECT_MOVIE,
  UN_SELECT_MOVIE,
  UPDATE_SEARCH_VALUE
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

export function searchSuccess(data) {
  return {
    type: SEARCH_SUCCESS,
    payload: data.data
  };
}

export function searchFailure() {
  return { type: SEARCH_FAILURE };
}

export function getSearchData(searchString, sortingType, searchOption) {
  return dispatch => {
    dispatch(searchStarted());
    return fetchFromSearch(searchString, sortingType, searchOption)
      .then(json => {
        dispatch(searchSuccess(json));
      })
      .catch(err => {
        dispatch(searchFailure());
      });
  };
}

export function selectMovie(movieData) {
  return { type: SELECT_MOVIE, payload: movieData };
}

export function unSelectMovie() {
  return { type: UN_SELECT_MOVIE };
}

export function updateSearchValue(searchValue) {
  return { type: UPDATE_SEARCH_VALUE, payload: searchValue };
}
