import {
  FETCH_DEFAULT,
  FETCH_FROM_SEARCH,
  CHANGE_SEARCH
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
    default:
      return state;
  }
}

export default rootReducer;
