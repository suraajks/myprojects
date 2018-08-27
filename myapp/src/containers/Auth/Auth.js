import React,{Component} from 'react';
import Input from  '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css'
import Aux from '../../hoc/aux'
import * as actions from '../../Store/actions/auth'
import {connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../withErrorHandler/withErrorHandler'
import axios from '../../Axios-orders';
import {Redirect} from 'react-router-dom'
class Auth extends Component{
    
    
    state={
        controls:{
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your name'
                },
                value:'',
                validation:{
                    required:true,
                    isEmail:true
                },
                valid:false,
                touched:false
            },
             password:{
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'password'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:6
                },
                valid:false,
                touched:false
            }
            
            
        },
        formValidity:false,
        signup:false
        
        
    }
    
    checkValidity=(value,rules)=>{
        let isValidity=true
        
        if(rules.required)
        {
            isValidity=value.trim!=="" && isValidity
            
        }
        
         if(rules.isEmail)
        {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValidity=re.test(value) && isValidity
            
        }
        if(rules.minLength)
        {
            isValidity=value.length >=rules.minLength && isValidity
            
        }
        
        return isValidity
        
    }
    
    inputChangedHandler=(event,controlName)=>{
        
        
      const  updatedcontrols={
            ...this.state.controls,
           [controlName]:{
                ...this.state.controls[controlName],
                 value:event.target.value
                
            }
            
            
            
            
        }
        
        updatedcontrols[controlName].valid=this.checkValidity(event.target.value,updatedcontrols[controlName].validation)
        updatedcontrols[controlName].touched=true;
        
        let isformValid=true
        
        for (let control in updatedcontrols)
        {
            isformValid=updatedcontrols[control].valid && isformValid
            
        }
        
        
     
        
       
        this.setState({controls:updatedcontrols,formValidity:isformValid})
    }
    
    signToggleHandler=()=>{
        
        this.setState(
            (prevState)=>{
                return {signup:!prevState.signup}
                    
                }
                )
        
    }
    
    
    
    formSubmitHandler=(event)=>{
        event.preventDefault();
        
        const userDetails={
            email:this.state.controls.email.value,
            password:this.state.controls.password.value
        }
       
        this.props.onFormSubmit(userDetails,this.state.signup)
       
         
        
       
        
    }
    
   
    render(){
        let error=null
        let redirect=null;
        let ingred_count=0;
        const ingred=this.props.ingredients
        
        for(let i in ingred)
        {
            ingred_count=ingred_count+ingred[i]
        }
         if(this.props.error){
             error=(<p>{this.props.error}</p>)
             
        
        }
      
        if(this.props.token && ingred_count > 0 ){
            
            redirect=<Redirect to="/checkout"/>
           
        }
        
        else if(this.props.token && ingred_count ===0 ){
            
            redirect=<Redirect to="/"/>
           
        }
    
     
   
         let form=(
            <Aux>
            
            <h1>Enter contact data</h1>
        
        <form onSubmit={this.formSubmitHandler} >
        {   Object.keys(this.state.controls).map((element)=>(
        
     
        <Input
        key={element} 
        elementType={this.state.controls[element].elementType}
        elementConfig={this.state.controls[element].elementConfig}
        value={this.state.controls[element].value}
        changed={(e)=>this.inputChangedHandler(e,element)}
        invalid={!this.state.controls[element].valid && this.state.controls[element].touched}
        shouldValidate={this.state.controls[element].validation}
        
        />
        
        
        ))
            
        
            }
             <Button btntype="Success"
            disabled={!this.state.formValidity}>
            Submit
            </Button>
           
         
           
            </form></Aux>)
            
            if(this.props.load)
            {
                form=(<Spinner/>)
                
            }
        
        
        
        
        return(
            <div className={classes.Auth}>
            {redirect}
            {error}
            {form}
            <Button btntype="Danger" clicked={this.signToggleHandler}>{this.state.signup?"Switch To Signin":"Switch to signup"}</Button>
            
           
           
           
             </div>
            
            )
    }
    
}


const mapStateToProps=(state)=>{
    return{
        error:state.auth.error,
        load:state.auth.loading,
        error:state.auth.error,
        token:state.auth.token,
        ingredients:state.burger.ingredients
    }
}


 const mapDispatchToProps=(dispatch)=>{
    
    return{
        
        onFormSubmit:(loginDetails,signup)=>{dispatch(actions.auth(loginDetails,signup))}
        
    }
}

export default withErrorHandler(connect(mapStateToProps,mapDispatchToProps)(Auth),axios);