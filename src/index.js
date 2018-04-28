import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import {applyMiddleware,createStore} from 'redux'
import reducer from './reducers'
import logger from 'redux-logger'
 const store= createStore(reducer,applyMiddleware(logger))

 render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
  