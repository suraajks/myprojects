import * as actionTypes from '../actions/actionsTypes'

const initialState={
    spinner:false,
    error:'',
    purchased:false
}

const order=(state=initialState,action)=>{
    
    switch(action.type){
        case actionTypes.ORDER_START:
            return{
                ...state,
                spinner:true
            
                
            }
        
        case actionTypes.ORDER_SUCCESS:
                return{
                    ...state,
                    spinner:false,
                    purchased:true
                   
                    
                }
        
        case actionTypes.ORDER_FAILURE:
         return{
                    ...state,
                    error:action.value
                }
                
        case actionTypes.PURCHASE_INIT:
            return{
                ...state,
                purchased:false
            }
       
        default:
       
        
            return{
                ...state,
                
            }
                
            
    }
    
    
}


export default order
