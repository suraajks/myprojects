import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import reducer from './Store/Reducer/reducer';
import {Provider} from 'react-redux';


 const store=createStore(reducer);


ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));


registerServiceWorker();
