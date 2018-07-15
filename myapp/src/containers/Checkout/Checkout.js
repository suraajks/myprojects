import React,{Component} from 'react';
import {Route} from 'react-router-dom'
import CheckoutSummary from '../../components/orders/CheckoutSummary/CheckoutSummary';
import Contacts from './ContactData/ContactData'

class Checkout extends Component{
    state={
        ingredients:null,
        price:0
    }
    componentWillMount(){
        const query=new URLSearchParams(this.props.location.search);
        const ingredients={};
        for(let params of query.entries()){
            console.log(params)
            
            
            if(params[0]==="Price")
          
             {this.setState({price:params[1]})}
             else{ingredients[params[0]]=+params[1]}
        }
        
        this.setState({ingredients:ingredients})
        
        
    }
    
    onCancelHandler=()=>{
        this.props.history.goBack(-1);
        
        
    }
    onContinueHandler=()=>{
        this.props.history.push({pathname:this.props.match.url+'/contacts'});
        
    }
    render(){
    
    return(
        <div>
        
       
       <CheckoutSummary 
       ingred={this.state.ingredients}
       continue={this.onContinueHandler}
       cancel={this.onCancelHandler}/>
       
        <Route path={this.props.match.url+"/contacts"} exact 
        render={(props)=>(<Contacts ingredients={this.state.ingredients} totalPrice={this.state.price} {...props}/>)}/>
        </div>
        
        )
    
    
}
}

export default Checkout;