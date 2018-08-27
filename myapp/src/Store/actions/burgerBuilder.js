import * as actionTypes from './actionsTypes';
import axios from '../../Axios-orders';



export const orderComplete=()=>{
    return{
        type:actionTypes.ORDER_COMPLETE
    }
}

export const addIngredient=(name) =>{
    
    return{
        type:actionTypes.ADD_INGREDIENT,
        ingredientName:name
        
    }
    
}
export const removeIngredient=(name) =>{
    
return{
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:name
        
   }
    
    
}

const setIngredient=(ing)=>{
    return{
        type:actionTypes.SET_INGREDIENT,
        ingredient:ing
        
    }
    
    
}

const fetchIngredientFailed=()=>{
    return{
        type:actionTypes.FETCH_INGREDIENT,
        
        
    }
    
    
}





export const initIngredient=() =>{
    
return dispatch=>{
      axios.get('https://reactproject-3e851.firebaseio.com/ingredients.json')
        .then(res=>{
            dispatch(setIngredient(res.data))
            
        })
        .catch(err=>{
            dispatch(fetchIngredientFailed())
        })
            
    
  
    
}
    
}
