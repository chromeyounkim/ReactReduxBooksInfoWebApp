import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/app.js';
import {setTopic, setDisplayMode} from './actions';

import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const thunk = store => next => action => { 
  if (action.fn && typeof action.fn === 'function') {
    action.fn(store.dispatch, store.getState()); // invoke the action
  } else {
    return next(action); // dispatch normally
  }
};

const logger = store => next => action => {
  console.log('MIDDLEWARE: Executing action ' + action.type);
  return next(action);
};

const store = createStore(reducers, compose(applyMiddleware(logger, thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f));

store.dispatch(setTopic('JavaScript'));
store.dispatch(setDisplayMode('THUMBNAIL'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);

const showState = () => {
  store.getState();
}

store.subscribe(showState);
