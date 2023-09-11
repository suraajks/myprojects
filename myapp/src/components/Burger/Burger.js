import React from 'react';
import classes from './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger=(props)=>{
   
    
      const checkTotal=Object.values(props.ingredients)
                            .reduce((total,i)=>{return total+i}) ;
      let transformedIngredient="";
      
      if(checkTotal > 0){
       transformedIngredient=Object.keys(props.ingredients)
                .map((igkey)=>{return [...Array(props.ingredients[igkey])]
                    .map((_,i)=> <BurgerIngredients key={igkey+ i} type={igkey}/>)

                    
                })
      }
      else
      {
          transformedIngredient=<p>Please start adding ingredients</p>
      }
         
                
                
      
    return (
        <div className={classes.Burger}>
        <BurgerIngredients type="bread-top"/>
        {transformedIngredient}
     
        <BurgerIngredients type="bread-bottom"/>
        <p>Total Price:${props.price}</p>
        
        
        </div>
        
        
        );
    
    
}
export default Burger;