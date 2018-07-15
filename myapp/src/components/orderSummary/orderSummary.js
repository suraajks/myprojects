import React from 'react';
import classes from './orderSummary.css';


const orderSummary =(props)=>{
        let ingred=[]
        
       for (let ing in props.ingredients)
        {
                ingred.push(
                        
                        {
                        "name":ing,
                        "amount":props.ingredients[ing]
                                
                        }
                        
                        )
       
        
                
                
        }
        
     
         const ingredientsout=ingred.map(ind=>{
                return <span  key={ind.name}> {ind.name}  ({ind.amount}) </span>
                
               
                
        })
      
        
        
        return(
         <div className={classes.orderSummary}>
         Ingredient:{ingredientsout}
         
        <p>Price:{props.price}</p>
        
        </div>)
        
       
    
    
    
}
export default orderSummary;