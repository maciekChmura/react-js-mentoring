import { ADD_ARTICLE } from '../constants/action-types';

const initialState = {
  articles: [],
  results: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    case 'DATA_LOADED':
      return Object.assign({}, state, {
        results: state.results.concat(action.payload)
      });
    default:
      return state;
  }
}

export default rootReducer;
