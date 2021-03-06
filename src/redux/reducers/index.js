import {
  CHANGE_SEARCH,
  CHANGE_SORTING,
  SEARCH_STARTED,
  SEARCH_SUCCESS,
  SEARCH_BY_ID_SUCCESS,
  SEARCH_FAILURE,
  SELECT_MOVIE,
  UN_SELECT_MOVIE,
  UPDATE_SEARCH_VALUE
} from '../constants/action-types';

const initialState = {
  movies: [],
  sortingType: 'release date',
  searchOption: 'title',
  isSearching: false,
  error: false,
  selectedMovie: null,
  searchValue: ''
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BY_ID_SUCCESS:
      return {
        ...state,
        selectedMovie: action.payload,
        isSearching: false,
        error: false
      };
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
    case UN_SELECT_MOVIE:
      return { ...state, selectedMovie: null };
    case UPDATE_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
