import React,{Component} from 'react';
import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Orders from '../../components/orders/order';
import Modal from '../../components/UI/Modal/Modal';
import axios from '../../Axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../withErrorHandler/withErrorHandler';
import * as actionTypes from '../../Store/actions/actionsTypes';
import {connect} from 'react-redux'






class BurgerBuilder extends Component{
    state={
     
       
        purchasable:false,
        order:false,
       
        error:false
        
    }
    componentDidMount(){
        // axios.get('https://reactproject-3e851.firebaseio.com/ingredients.json')
        // .then(res=>{
        //     this.setState({ingredients:res.data})
            
        // })
        // .catch(err=>{
        //     this.setState({error:true})
            
            
        // });
        // console.log("didmount")
        
    }
    
    modal =null;
    
    onPurchasableHandler=()=>{
         const orderEnable=Object.values(this.props.ingredients)
                        .reduce((sum,i)=>sum+i)
         
         
         
         
         return orderEnable>0
         
     }
    
    //  addIngredientHandler=(ing)=>{
    //     const oldValue=this.state.ingredients[ing];
    //     const newVaule=oldValue+1;
    //     const total=this.state.totalPrice+INGREDIENT_PRICE[ing];
         
    //     const updatedIngredient={
    //         ...this.state.ingredients
    //     }
    //     updatedIngredient[ing]=newVaule
       
    //     this.setState({ingredients:updatedIngredient,totalPrice:total})
    //      this.onPurchasableHandler(updatedIngredient)
        
    // }
    //  removeIngredientHandler=(ing)=>{
    //     const oldValue=this.state.ingredients[ing];
    //     if (oldValue>0){
    //     const newVaule=oldValue-1;
    //     const total=this.state.totalPrice-INGREDIENT_PRICE[ing];
         
    //     const updatedIngredient={
    //         ...this.state.ingredients
    //     }
    //      updatedIngredient[ing]=newVaule
    //     this.setState({ingredients:updatedIngredient,totalPrice:total})
    //     this.onPurchasableHandler(updatedIngredient)
    // }
    //  }
     
     onOrderHandler=()=>{
       
         
         this.setState({order:true})
        
         
        // this.modal=  <Modal><Orders items={this.state.ingredients}></Orders></Modal>
        //  console.log("modal",this.modal)
     }
     
     backDropHandler=()=>{
         this.setState({order:false})
         console.log("backdrio close")
     }
     
     onContinueHandler=()=>{
        //  const queryParams=[];
        //  for(let i in this.state.ingredients){
        //      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
             
        //  }
        //  queryParams.push('Price='+this.state.totalPrice)
        //  const queryString=queryParams.join("&")
         
        // this.props.history.push({pathname:"checkout",
        //     search:'?'+queryString
        // })
        // this.setState({spinner:true})
        
        // const order={
        //     ingredients:this.state.ingredients,
        //     price:this.state.totalPrice,
        //     custmoer:{Name:"Suraaj",Address:"test street",countery:"india"},
        //     email:"test@gmail.com",
        //     delivery:"fastest"
        // }
        // axios.post('/orders.json',order)
        // .then(response=>{
        //     this.setState({spinner:false})
        //     this.setState({order:false})
            
            
        // })
        // .catch(error=>console.log(error));
         this.props.history.push({pathname:"/checkout"})
       
         
         
     }
     
    
    render(){
        console.log("pruchaseble",this.state.purchasable)
        const disableCheck={
            ...this.props.ingredients
            
        }
        console.log(disableCheck.salad)
        
        for(let key in disableCheck){
            
            disableCheck[key]=disableCheck[key]<=0
        }
        console.log(disableCheck['bacon'])
         console.log("false",this.state.order)
         let burger=<Spinner/>
         let orderSummary=null;
         let buildControl=null;
         
         if (this.state.error){
             burger=(<p>Not able to Load ingredients</p>)
         }
         
         if(this.props.ingredients){
             burger=(<Burger ingredients={this.props.ingredients} price={this.props.Price}/>)
             
             orderSummary=( <Orders items={this.props.ingredients}
               cancel={this.backDropHandler}
               continue={this.onContinueHandler}
               price={this.state.totalPrice}
             
               ></Orders>)
               
               buildControl=(<BuildControls 
                onAdd={(ing)=>this.props.onAddIngredients(ing)} 
                onRemove={(ing)=>this.props.onRemoveIngredients(ing)} 
                disable={disableCheck}
                purchase={this.onPurchasableHandler()}
                order={this.onOrderHandler}
               
                />)
         }
         
        return(
            <Aux>
                
               {burger}
               
              <Modal 
              show={this.state.order}
               backdrop={this.backDropHandler}
              >
              {orderSummary}

               </Modal>
                            
                <div> 
                {buildControl}
                </div>
                
               
            
               
                
            </Aux>
            
            
            );
    }
    
}


const mapStateToProps=(state)=>{
    return{
    
    ingredients:state.ingredients,
    Price:state.TotalPrice
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
    
    onAddIngredients:(ingred)=>{dispatch({type:actionTypes.ADD_INGREDIENT,ingredientName:ingred})},
    onRemoveIngredients:(ingred)=>{dispatch({type:actionTypes.REMOVE_INGREDIENT,ingredientName:ingred})}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(WithErrorHandler(BurgerBuilder,axios));