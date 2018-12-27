import { ADD_ARTICLE } from '../constants/action-types';
import { fetchFromSearch, fetchDefault } from '../../utils/dataLoaders';

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getData() {
  return function thunk(dispatch) {
    // return fetch('https://jsonplaceholder.typicode.com/posts')

    return (
      fetchDefault(12) //.then(data =>
        // this.setState(state => ({ data: data.data }))
        .then(json => {
          dispatch({ type: 'DATA_LOADED', payload: json.data });
        })
    );
  };
}
