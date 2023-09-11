import React,{Component} from 'react';
import OrderSummary from '../../components/orderSummary/orderSummary';
import axios from '../../Axios-orders';
import {connect} from 'react-redux';

class Order extends Component {
    
    state={
        orders:[]
    }
    
    componentDidMount(){
        let fetchorder=[]
        
        
        const queryParams="?auth="+this.props.token+'&orderBy="userId"&equalTo="'+this.props.userId+'"'
        
        axios.get('/orders.json'+queryParams)
            .then((response)=>{
                for (let key in response.data){
                    
                    fetchorder.push({
                        ...response.data[key],
                        "id":key
                        
                        })
                    
               
                }
                this.setState({orders:fetchorder})
                
                
            })
    }
    
    render(){
        
        return(
            <div>
            
            
            {
             this.state.orders.map( (order)=>{
                 
                 return  <OrderSummary key={order.id}
                 ingredients={order.ingredients}
                 price={order.price}
                 
                 />
                 
             })
            
           
                
            }
            
            </div>
            
            
            )
    }
    
}

const mapStateToProps=(state)=>{
    return{
    token:state.auth.token,
    userId:state.auth.userid
    }
}

export default connect(mapStateToProps)(Order);