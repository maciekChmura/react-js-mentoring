import {
  CHANGE_SEARCH,
  CHANGE_SORTING,
  SEARCH_STARTED,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  SELECT_MOVIE
} from '../constants/action-types';

const initialState = {
  movies: [],
  sortingType: 'release date',
  searchOption: 'title',
  isSearching: false,
  error: false,
  selectedMovie: ''
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        isSearching: false,
        error: false
      };
    case SEARCH_STARTED:
      return { ...state, isSearching: true, error: false };
    case SEARCH_FAILURE:
      return { ...state, isSearching: false, error: true };
    case CHANGE_SEARCH:
      return { ...state, searchOption: action.payload };
    case CHANGE_SORTING:
      return { ...state, sortingType: action.payload };
    case SELECT_MOVIE:
      return { ...state, selectedMovie: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
