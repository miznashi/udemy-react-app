import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; //追加
import { Provider } from 'react-redux'; //追加

import './index.css';
import reducer from './reducers'; //追加
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
