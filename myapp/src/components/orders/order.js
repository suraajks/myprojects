import React from 'react';
import Button from '../UI/Button/Button';

const Orders = (props) => {



   
    const ingredientSummary = Object.keys(props.items).map((key) => {
        return <li key={key}>
            <span style={{textTransform:'capitalize'}}>
            {key}:{props.items[key]}</span>
            </li>

    })
  

    return (
        <div>
     
        <h1>Your orders:</h1>
        {ingredientSummary}
        <h3>Price:{props.price}</h3>
        <p>Proceed to checkout</p>
        <Button btntype="Success" clicked={props.continue} >yes</Button>
        <Button btntype="Danger" clicked={props.cancel}>cancel</Button>
      
        
        
        </div>






    );


}
export default Orders;
