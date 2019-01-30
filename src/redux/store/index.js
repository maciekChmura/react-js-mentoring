import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import withRedux from 'next-redux-wrapper';
import { offline } from '@redux-offline/redux-offline';
import config from '@redux-offline/redux-offline/lib/config';
import rootReducer from '../reducers';

const composeEnhancers = compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk), offline(config))
);

export default withRedux(store);
