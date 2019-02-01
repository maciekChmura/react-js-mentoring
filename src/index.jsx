import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import store from './redux/store';
import GlobalStyle from './components/GlobalStyle';

import App from './components/App';

render(
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <>
          <GlobalStyle />
          <App />
        </>
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);
