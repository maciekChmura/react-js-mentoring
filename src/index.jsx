import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import store from './redux/store';
import GlobalStyle from './components/GlobalStyle';

import App from './components/App';
import DetailPage from './components/Pages/DetailPage/DetailPage';
import NotFoundPage from './components/Pages/NotFound/NotFound';

render(
  <ErrorBoundary>
    <Provider store={store}>
      <Router>
        <>
          <GlobalStyle />
          <App />
        </>
      </Router>
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);
