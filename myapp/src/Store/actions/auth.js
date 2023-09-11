import * as actionTypes from './actionsTypes';
import axios from 'axios';
import * as actions from './burgerBuilder'

export const authStart=()=>{
    return{
    type:actionTypes.AUTH_START
    }
}


export const authSuccess=(token,userId)=>{
   
    return{
        
        type:actionTypes.AUTH_SUCCESS,
        idToken:token,
        userId:userId
    };
}
const logout=()=>{
     return{
        type:actionTypes.AUTH_LOGOUT
    }
}

export const authLogOut=()=>{
    return(dispatch)=>{
        dispatch(actions.orderComplete())
    localStorage.clear()
    dispatch(logout())
    }
}

const checkAuthTimeout=(timeout)=>{
    return (dispatch)=>{
    
    setTimeout(()=>{dispatch(authLogOut())},timeout*1000)
    }
    
}

export const authFail=(error)=>{
    return{
        
        type:actionTypes.AUTH_FAIL,
        error:error
    };
}

export const auth=(Data,signup)=>{
    return (dispatch)=>{
        const authData={...Data,returnSecureToken:true}
        dispatch(authStart())
        let url='https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAUKTSzxzXiu_xTzqlJXqpq5LNlknRpB3w'
        if(!signup){
            url='https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAUKTSzxzXiu_xTzqlJXqpq5LNlknRpB3w'
        }
        axios.post(url,authData)
        .then((response)=>{
            const date=new Date(new Date().getTime()+response.data.expiresIn*1000)
            localStorage.setItem("token",response.data.idToken)
            localStorage.setItem("expirationdate",date)
            localStorage.setItem("userId",response.data.localId)
            
            dispatch(authSuccess(response.data.idToken,response.data.localId))
            
            dispatch(checkAuthTimeout(response.data.expiresIn))
        })
        .catch((error)=>{
           
            dispatch(authFail(error.response.data.error.message))
        })
        
    }
    
}

    
export const checkAuth=()=>{
    
    return (dispatch)=>{
    
    const token=localStorage.getItem("token")
    
    if(token)
    {
        const expires=new Date(localStorage.getItem("expirationdate"))
        
        
        const date=new Date()
        const expiresIn=(expires.getTime()-date.getTime())/1000
        if(date<expires){
             const userid=localStorage.getItem("userId")
             dispatch(authSuccess(token,userid))
             dispatch(checkAuthTimeout(expiresIn))
        }
        
       
    }
    }
    
}