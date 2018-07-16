import React,{Component} from 'react';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button'
import axios from '../../../Axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner'
import Aux from '../../../hoc/aux';
import {connect} from 'react-redux';

class Contact extends Component
{
    state={
        spinner:false
    }
    
    onCancelHandler=()=>{
        
        this.props.history.goBack(-1)
    }
    
    onOrderHandler=(event)=>{
        this.setState({spinner:true})
        
          event.preventDefault()          
          const order={
            ingredients:this.props.ingredients,
            price:this.props.totalPrice,
            customer:{Name:"Suraaj",Address:"test street",countery:"india"},
            email:"test@gmail.com",
            delivery:"fastest"
        }
        axios.post('/orders.json',order)
        .then(response=>{
            this.setState({spinner:false})
            // this.setState({order:false})
              this.props.history.push('/')
            
            
        })
        .catch(error=>console.log(error));
        
        
    }
    render(){
        let form=(
            <Aux>
            
            <h1>Enter contact data</h1>
        
        <form>
            <input type="text" className={classes.Input} placeholder="Enter your name"/>
            <input type="text" className={classes.Input} placeholder="Enter your age"/>
            <input type="text" className={classes.Input} placeholder="Enter your address"/>
            <input type="text" className={classes.Input} placeholder="Postal Code"/>
            <Button btntype="Success" clicked={this.onOrderHandler}>Submit</Button>
            <Button btntype="Danger" clicked={this.onCancelHandler}>Cancel</Button>
            </form></Aux>)
            
            if(this.state.spinner)
            {form=(<Spinner/>)}
         
        
        return(
            <div className={classes.Contact}>
            {form}
            </div>
           
            
            
            
            )
        
        
    }
    
    
}

const mapStateToProps=(state)=>{
    return{
    ingredients:state.ingredients,
    price:state.totalPrice
    }
    
    
}

export default connect(mapStateToProps)(Contact);