import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //how we can redux to our app, we use a provider and connect
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {searchRobots} from './reducers';
import 'tachyons';

const store = createStore(searchRobots)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
