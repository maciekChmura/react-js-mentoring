import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import GlobalStyle from './components/GlobalStyle';

import App from './components/App';
import DetailPage from './components/Pages/DetailPage/DetailPage';
import NotFoundPage from './components/Pages/NotFound/NotFound';

render(
  <Provider store={store}>
    <Router>
      <>
        {/* <Route path="/:filter?" component={App} /> */}
        <GlobalStyle />
        <Route path="/" exact component={App} />
        <Route path="/film/:id" component={DetailPage} />
        <Route path="*" component={NotFoundPage} />
      </>
    </Router>
  </Provider>,
  document.getElementById('root')
);
