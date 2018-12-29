import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { offline } from '@redux-offline/redux-offline';
import config from '@redux-offline/redux-offline/lib/config';
import rootReducer from '../reducers';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  compose(
    storeEnhancers(applyMiddleware(thunk)),
    offline(config)
  )
);

export default store;
