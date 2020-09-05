import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

// ReactDOM.render(<App />, document.getElementById('root'));
// npm uninstall react-redux -S
// npm i react-redux@6.0.0 -S

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
