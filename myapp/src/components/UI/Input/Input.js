import React from 'react';
import classes from './Input.css'

const Input=(props)=>{
    let Inputtype=null;
    let inputClass=[classes.InputElement]
   
    if(props.invalid && props.shouldValidate){
       
        inputClass.push(classes.Invalid)
    }
    
    switch(props.elementType){
        
        case('input'):
            Inputtype=<input {...props.elementConfig} className={inputClass.join(' ')} value={props.value} onChange={props.changed}/>
            break;
        case('textarea'):
            Inputtype=<textarea {...props.elementConfig} className={inputClass.join(' ')} value={props.value} onChange={props.changed}/>
            break;
        case('select'):
            Inputtype=(<select className={inputClass.join(' ')} value={props.value} onChange={props.changed}> 
            {props.elementConfig.options.map((option)=>(<option value={option.value} key={option.value}> {option.displayValue}</option>))}
            
            </select>)
            break;
        default:
            Inputtype=<input {...props.elementConfig} className={inputClass.join(' ')} value={props.value} onChange={props.changed}/>
        
    }
    return(
    
    <div className={classes.Input}>
    <label className={classes.Label
        
    }>{props.label}</label>
    {Inputtype}
    </div>
    )
    
}

export default Input;