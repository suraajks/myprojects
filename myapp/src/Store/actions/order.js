import * as actionTypes from './actionsTypes';
import axios from '../../Axios-orders';
import * as actions from '../../Store/actions/burgerBuilder';


const orderSuccess=()=>{
    
   
    return{
        type:actionTypes.ORDER_SUCCESS
    }
        
    
}

const orderFailure=(error)=>{
    return{
        type:actionTypes.ORDER_FAILURE,
        value:error
    }
        
  
}

const orderStart=()=>{
    return{
        type:actionTypes.ORDER_START
    }
        
    
}

export const purchaseInit=()=>{
    return {
        type:actionTypes.PURCHASE_INIT
    }
}

export const orderinit=(orderform,token)=>{
    return (dispatch)=>{
        dispatch(orderStart())
         axios.post('/orders/.json?auth='+token,orderform)
        .then(response=>{
             dispatch(actions.orderComplete())
            dispatch(orderSuccess())
           
            
           
         
        })
        .catch(error=>dispatch(orderFailure(error)));
        
        
    }
    
   
        
    
}

