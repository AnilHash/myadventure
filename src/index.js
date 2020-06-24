import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import configureStore from './store/configureStore'

const store = configureStore()
store.getState()
store.subscribe(()=>console.log(store.getState()))



ReactDOM.render(
  <Provider store={store}>   
    <App />
  </Provider>,
  document.getElementById('root')
)