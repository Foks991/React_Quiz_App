const { composeWithDevTools } = require('redux-devtools-extension');
import React from 'react';
import { render } from 'react-dom';
import './components/style.less';

import Quiz from './components/Quiz/Quiz';
import Main from './components/Main/Main';

import rootReducer from "./store/rootReducer";
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import rootSaga from './store/rootSaga';
import { Provider } from 'react-redux';

const root = document.getElementById('root');

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

const App = (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route path={'/'} component={Main} exact/>
        <Route path={'/quiz'} component={Quiz} exact/>
      </Switch>
    </Provider>
  </BrowserRouter>
);

render(App, root);