import React,{Component} from 'react';
import {connect} from 'react-redux'

import classes from './Navigationitems.css';
import NavigationItem from '../Navigationitem/Navigationitem';



class navigationItems extends Component {
    render(){
        
        return(
    
     <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
       { this.props.authenticated?<NavigationItem link="/Orders">Orders</NavigationItem>:null}
       {this.props.authenticated?<NavigationItem link="/logout">Logout</NavigationItem>:
       <NavigationItem link="/auth">Authenticate</NavigationItem>}
    </ul>
    )
    
   
   }
}

const mapStateToProps=(state)=>{
    return{
    
    authenticated:state.auth.token
    }
    
    
}
export default connect(mapStateToProps)(navigationItems);