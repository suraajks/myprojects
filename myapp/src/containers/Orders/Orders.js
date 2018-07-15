import React,{Component} from 'react';
import OrderSummary from '../../components/orderSummary/orderSummary';
import axios from '../../Axios-orders';

class Order extends Component {
    
    state={
        orders:[]
    }
    
    componentDidMount(){
        let fetchorder=[]
        
        axios.get('/orders.json')
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

export default Order;