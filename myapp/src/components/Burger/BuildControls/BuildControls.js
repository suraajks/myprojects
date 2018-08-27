import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css'


const controls=[
    {label:'Salad',type:"salad"},
    {label:'Cheese',type:"cheese"},
    {label:'Bacon',type:"bacon"},
    {label:'Meat',type:"meat"}
    ]
    
    
const BuildControls=(props)=>(
    
    <div className={classes.BuildControls}>
    
    {controls.map(c=> (
    <BuildControl
    disableCheck={props.disable[c.type]}
    key={c.label} 
    label={c.type}
    added={()=>props.onAdd(c.type)}
    removed={()=>props.onRemove(c.type)
       
    }/>) )}
   <button 
   className={classes.OrderButton}
   disabled={!props.purchase}
   onClick={props.order}
   
   >{props.children}</button>
    </div>
    
    
    )
    
export default BuildControls;
