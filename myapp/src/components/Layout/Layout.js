import React,{Component} from 'react';
import Aux from '../../hoc/aux';
import classes from "./Layout.css";
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state={
        sideDrawer:false
        
    }
    showSideDrawer=()=>{
        this.setState({sideDrawer:true})
        
    }
    hideSideDrawer=()=>{
         this.setState({sideDrawer:false})
        
    }
    sideDrawerToggleHandler=()=>{
        
        this.setState((prevState)=>{return {sideDrawer:!prevState.sideDrawer} });
        
    }
    render(){
    return(
   
    <Aux>
    
    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
    <SideDrawer open={this.state.sideDrawer} closed={this.hideSideDrawer}/>
        <main className={classes.content}>
          {this.props.children}
        </main>
    </Aux>
    )
   
}
}
export default Layout;