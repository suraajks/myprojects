import * as actionTypes from '../actions/actionsTypes';

 const initialstate={
        token:null,
        userid:null,
        loading:false,
        error:null
    }
    

const reducer=(state=initialstate,action)=>{
   
    switch(action.type){
        
        case actionTypes.AUTH_START:
            return{
                ...state,
                error:null,
                loading:true
            }
            
        case actionTypes.AUTH_SUCCESS:
            return{
                ...state,
                error:null,
                loading:false,
                token:action.idToken,
                userid:action.userId,
              
            }
            
        case actionTypes.AUTH_FAIL:
            return{
                ...state,
                error:action.error,
                loading:false,
               
            }
            
        case actionTypes.AUTH_LOGOUT:
            return{
                ...state,
                token:null,
                userId:null,
                ingredients:null
                
            }
        
            
        default:
             return{
                 ...state
             }
    }
    
    
}

export default reducer