import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import burgerBuilder from './Store/Reducer/burgerBuilder';
import orderReducer from './Store/Reducer/order';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import authReducer from './Store/Reducer/auth';


const reducer=combineReducers(
    {
        burger:burgerBuilder,
        order:orderReducer,
        auth:authReducer
        
    }
    
    )
    
    
    const logger=store=>{
        return next=>{
            return action=>{
                // console.log('Midleware diaptch',action);
                const result =next(action);
               // console.log('Midleware next state',store.getState())
                return result;
            }
            
        }
    }
 const store=createStore(reducer,applyMiddleware(thunk,logger));


ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));


registerServiceWorker();
