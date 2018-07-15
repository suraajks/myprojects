import React,{Component} from 'react';
import Modal from '../components/UI/Modal/Modal';
import Aux from '../hoc/aux'

const withErrorHandler=(WrappedComponent,axios)=>{
    return class extends Component{
        state={
            
            error:null
        }
        componentWillMount(){
            
            this.reqInter=axios.interceptors.request.use(req=>{
                this.setState({error:null})
                
                return req
                
                
            })
            
            this.resInter=axios.interceptors.response.use(res=>res,error=>{
                this.setState({error:error})
                
                
            })
            
            
        }
        
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInter)
            axios.interceptors.response.eject(this.resInter)
            
            
        }
        
        errorConfirmedHabdler=()=>{
            
              this.setState({error:null})
            
            
        }
        render(){
             return(
            <Aux>
            <Modal show={this.state.error}
            backdrop={this.errorConfirmedHabdler}
            >{this.state.error?this.state.error.message:null}</Modal>
            
            <WrappedComponent {...this.props}/>
            </Aux>
            )
        }
            
        }
}
       
    


export default withErrorHandler;