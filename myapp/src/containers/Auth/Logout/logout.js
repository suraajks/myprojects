import  React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import * as actions from '../../../Store/actions/auth'

class Logout extends Component{
    
    componentDidMount(){
        this.props.logout()
    }
        
    
    render(){
        console.log("logout")
        
        
        
        return <Redirect to="/" />
        
        
    }
    
}

const mapDispatchToProps=(dispatch)=>{
    return{
        logout:()=>{dispatch(actions.authLogOut())}
        
    }
}


export default connect(null,mapDispatchToProps)(Logout)