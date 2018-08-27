import React, { Component } from "react";
import Layout from './components/Layout/Layout.js'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import {Route,withRouter,Redirect,Switch} from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/logout'
import * as actions from './Store/actions/auth'
import {connect} from 'react-redux'


import "./App.css";

class App extends Component {
  
  componentDidMount(){
    
    this.props.authCheck()
  }
  
  render() {
    let route;
    
    if(this.props.token){
    
    route=
      <Switch>
        <Route path="/checkout"  component={Checkout}/>
        <Route path="/orders" component={Orders}/>
        <Route path="/auth" exact component={Auth}/>
        <Route path="/logout" component={Logout}/>
        <Redirect to="/"/>
      
      </Switch>
      
    }
    else{
      route=
      <Switch>
      
        <Route path="/auth" exact component={Auth}/>
        <Redirect to="/"/>
        
      </Switch>
      
    
    }
    
    return (
    <div>
      <Layout>
        <Route path="/" exact component={BurgerBuilder}/>
        {route}
        
        
        
     
      </Layout>
      
      
      
     
    </div>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    authCheck:()=>{dispatch(actions.checkAuth())}
  }
  
}

const mapStateToProps=(state)=>{
  return{
    token:state.auth.token
    
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
