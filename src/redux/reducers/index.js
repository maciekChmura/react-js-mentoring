import {
  FETCH_DEFAULT,
  FETCH_FROM_SEARCH,
  CHANGE_SEARCH,
  CHANGE_SORTING
} from '../constants/action-types';

const initialState = {
  articles: [],
  movies: [],
  sortingType: 'release date',
  searchOption: 'title'
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DEFAULT:
      return { ...state, movies: action.payload };
    case FETCH_FROM_SEARCH:
      return { ...state, movies: action.payload };
    case CHANGE_SEARCH:
      return { ...state, searchOption: action.payload };
    case CHANGE_SORTING:
      return { ...state, sortingType: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
