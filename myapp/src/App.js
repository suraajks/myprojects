import React, { Component } from "react";
import Layout from './components/Layout/Layout.js'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import {Route} from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'


import "./App.css";

class App extends Component {
  render() {
    return (
    <div>
      <Layout>
        
        
        <Route path="/" exact component={BurgerBuilder}/>
        <Route path="/checkout"  component={Checkout}/>
        <Route path="/orders" component={Orders}/>
        <Route path="/auth" component={Auth}/>
        
     
      </Layout>
      
      
      
     
    </div>
    );
  }
}
export default App;