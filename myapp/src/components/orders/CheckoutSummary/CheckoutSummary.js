import React from 'react'
import Burger from '../../Burger/Burger'
import classes from './CheckoutSummary.css'
import Button from '../../UI/Button/Button'

const CheckoutSummary =(props)=>{
    
    return(
        <div className={classes.CheckoutSummary}>
        <h1>Here's your order</h1>
        <Burger ingredients={props.ingred}/>
        <Button btntype="Success" clicked={props.continue}>Continue</Button>
        <Button btntype="Danger" clicked={props.cancel}>Cancel</Button>
        </div>
        )
    
    
}

export default CheckoutSummary;