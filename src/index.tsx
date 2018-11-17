import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './assets/styles/base.scss';
import './assets/styles/typography.scss';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from './reducers/root.reducer';

/**
 * Creating redux store
 */
const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk, createLogger()));

/**
 * Rendering app
 */
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

/**
 * Registering service worker
 */
serviceWorker.register();
