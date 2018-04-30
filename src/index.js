import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import { applyMiddleware,createStore } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk';
import reducer from './reducers'



 const store= createStore(reducer,applyMiddleware(logger,thunk))

 render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
  