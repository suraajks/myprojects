import React,{Component} from 'react';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button'

import Spinner from '../../../components/UI/Spinner/Spinner'
import Aux from '../../../hoc/aux';
import {connect} from 'react-redux';
import Input from '../../../components/UI/Input/Input';
import * as orderActions from '../../../Store/actions/index';
import {Redirect} from 'react-router-dom';

class Contact extends Component
{
    state={
        
        orderForm:{
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your name'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            street:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Street'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            zipCode:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Zip Code'
        
                },
                value:'',
                validation:{
                    required:true,
                    minLength:5,
                    maxLength:10
                },
                valid:false,
                touched:false
            },
            country:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Country'
                },
                value:'',
                 validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Email'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            delivery:{
                elementType:'select',
                elementConfig:{
                   options:[
                      
                       {value:'fastest',displayValue:'Fastest'},
                       {value:'cheapest',displayValue:'cheapest'}
                       ]
                },
                value:'fastest',
                valid:true,
                validation:{}
            
            }
            
            
                
            },
            
            formIsValid:false
            
            
        
    }
    
    checkValidity=(value,rules)=>{
        let isValidity=true;
        if(rules.required){
            isValidity=value.trim()!==''&& isValidity
         
        }
         if(rules.minLength){
            isValidity=value.length > rules.minLength && isValidity
         
        }
         if(rules.maxLength){
            isValidity=value.length < rules.maxLength && isValidity
        
        }
       
        return isValidity
        
        
        
    }
    
    inputChangedHandler=(event,element)=>{
        let updatedform={...this.state.orderForm}
        let updatedformElement={
            ...this.state.orderForm[element],
            value:event.target.value
        }
        
        updatedformElement.valid=this.checkValidity(updatedformElement.value,updatedformElement.validation)
        
       updatedformElement.touched=true
       
      
        
        updatedform[element]=updatedformElement
         let formValidity=true
       for(let elements in updatedform){
           
           
           formValidity=updatedform[elements].valid && formValidity
       }
       
        this.setState({orderForm:updatedform,formIsValid:formValidity})
        
        
    }
    
    onCancelHandler=()=>{
        
        this.props.history.goBack(-1)
    }
    
    onOrderHandler=(event)=>{
        // this.setState({spinner:true})
        
        
          event.preventDefault()    
           let formData={}
          for (let k in this.state.orderForm){
              
              formData[k]=this.state.orderForm[k].value
              
              
          }
          
          
         
          const order={
            ingredients:this.props.ingredients,
            price:this.props.price,
            orderDetails:formData,
            userId:this.props.userid
            
        }
        
      
        this.props.onOrder(order,this.props.token)
        // axios.post('/orders.json',order)
        // .then(response=>{
        //     this.setState({spinner:false})
        //     // this.setState({order:false})
        //       this.props.history.push('/')
            
            
        // })
        // .catch(error=>console.log(error));
        
        
    }
    render(){
        
        // let formElements=[]
        // for(let keys in this.state.orderForm){
            
        //     formElements.push({
        //         id:this.state.orderForm[keys].elementType,
        //         config:this.state.orderForm[keys].elementConfig
        //     })
           
            
        // }
        // 
        let form=(
            <Aux>
            
            <h1>Enter contact data</h1>
        
        <form onSubmit={this.onOrderHandler}>
        {   Object.keys(this.state.orderForm).map((element)=>(
        
     
        <Input
        key={element} 
        elementType={this.state.orderForm[element].elementType}
        elementConfig={this.state.orderForm[element].elementConfig}
        value={this.state.orderForm[element].value}
        changed={(event)=>this.inputChangedHandler(event,element)}
        invalid={!this.state.orderForm[element].valid && this.state.orderForm[element].touched}
        shouldValidate={this.state.orderForm[element].validation}
      
        />
        ))
            
        
            }
           
            <Button btntype="Success" disabled={!this.state.formIsValid}>Order</Button>
           
            </form></Aux>)
           
            if(this.props.spin)
            {form=(<Spinner/>)}
         
        
        return(
            
            
            <div className={classes.Contact}>
            {this.props.purchased?<Redirect to="/"/>:null}
            {form}
            </div>
           
            
            
            
            )
        
        
    }
    
    
}

const mapStateToProps=(state)=>{
    return{
    ingredients:state.burger.ingredients,
    price:state.burger.TotalPrice,
    spin:state.order.spinner,
    purchased:state.order.purchased,
    userid:state.auth.userid,
    token:state.auth.token
    }
    
    
}

const mapDispatchToProps=(dispatch)=>{
    return{
    onOrder:(order,token)=>{dispatch(orderActions.orderinit(order,token))}
    }
      
    }


export default connect(mapStateToProps,mapDispatchToProps)(Contact);