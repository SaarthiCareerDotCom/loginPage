import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import App from './containers/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [ thunk ];
if(process.env.NODE_ENV !== 'production') {
	middleware.push(createLogger())
}

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
	)