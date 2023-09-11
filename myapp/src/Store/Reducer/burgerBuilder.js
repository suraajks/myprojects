import * as actionTypes from '../actions/actionsTypes';

const initialState={
    ingredients:null,
    TotalPrice:4,
    error:false,
    builded:false
}
const INGREDIENT_PRICE={
    cheese:0.4,
    meat:0.5,
    bacon:0.6,
    salad:0.3
    
}


const reducer=(state=initialState,action)=>{
    
    switch(action.type){
        
        case actionTypes.ADD_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName]+1,
                    
                },
                TotalPrice:state.TotalPrice+INGREDIENT_PRICE[action.ingredientName],
                builded:true
            }
            
        case actionTypes.REMOVE_INGREDIENT:
             return{
                ...state,
                ingredients:{
                    
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName]-1
                },
                  TotalPrice:state.TotalPrice-INGREDIENT_PRICE[action.ingredientName]
             }
             
        case actionTypes.SET_INGREDIENT:
            return{
                ...state,
                ingredients:action.ingredient,
                TotalPrice:4
                
            }
        case actionTypes.FETCH_INGREDIENT:
            return{
                ...state,
                error:true
                
                
                
            }
        case actionTypes.ORDER_COMPLETE:
            return{
                ...state,
                builded:false
            }
        default:
            return{
                ...state
            }
        
        
        
    }
    
    
    
}

export default reducer;