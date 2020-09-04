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
import { Beforeunload } from 'react-beforeunload';
const root = document.getElementById('root');

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
import { camelToKebab } from "./helpers/textFormatter";

const quizzesRoutes = Object.keys(store.getState().quiz.allQuizzes).map((el, index) =>(
  <Beforeunload key={el + index} onBeforeunload={() => ""}>
    <Route path={`/${camelToKebab(el)}`} component={Quiz}/>
  </Beforeunload>
));


const App = (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route path={'/'} component={Main} exact/>
        {quizzesRoutes}
      </Switch>
    </Provider>
  </BrowserRouter>
);

render(App, root);
