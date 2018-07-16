import * as actionTypes from '../actions/actionsTypes';

const initialState={
    ingredients:{
         salad:0,
         bacon:0,
         cheese:0,
         meat:0
        
        
        
    },
    TotalPrice:4
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
                    [action.ingredientName]:state.ingredients[action.ingredientName]+1
                },
                TotalPrice:state.TotalPrice+INGREDIENT_PRICE[action.ingredientName]
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
        default:
            return{
                ...state
            }
        
        
        
    }
    
    
    
}

export default reducer;