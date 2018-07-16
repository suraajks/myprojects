import React,{Component} from 'react';
import {Route} from 'react-router-dom'
import CheckoutSummary from '../../components/orders/CheckoutSummary/CheckoutSummary';
import Contacts from './ContactData/ContactData';
import {connect} from 'react-redux';

class Checkout extends Component{
    // state={
    //     ingredients:null,
    //     price:0
    // }
    // componentWillMount(){
        // const query=new URLSearchParams(this.props.location.search);
        // const ingredients={};
        // for(let params of query.entries()){
        //     console.log(params)
            
            
        //     if(params[0]==="Price")
          
        //      {this.setState({price:params[1]})}
        //      else{ingredients[params[0]]=+params[1]}
        // }
        
        // this.setState({ingredients:ingredients})
        
        
    // }
    
    onCancelHandler=()=>{
        this.props.history.goBack(-1);
        
        
    }
    onContinueHandler=()=>{
        this.props.history.push({pathname:this.props.match.url+'/contacts'});
        
    }
    render(){
    // Route path={this.props.match.url+"/contacts"} exact 
    //  render={(props)=>(<Contacts ingredients={this.state.ingredients} totalPrice={this.props.price} {...props}/>)}/>
    return(
        <div>
        
       
       <CheckoutSummary 
       ingred={this.props.ingredients}
       continue={this.onContinueHandler}
       cancel={this.onCancelHandler}/>
       <Route path={this.props.match.url+"/contacts"} exact component={Contacts}/>
        
        </div>
        
        )
    
    
}
}

const mapStateToProps=(state)=>{
    return{
        ingredients:state.ingredients
        
    }
    
}

export default connect(mapStateToProps)(Checkout);