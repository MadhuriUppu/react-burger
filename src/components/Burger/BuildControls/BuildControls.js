import React from 'react';

import '../../../App.css';
import BuildControl from './BuildControl/BuildControl'


const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
  { label: 'Bacon', type: 'bacon'},
];

const buildControls = ( props ) => {

    

 return (
  //  <div className={classes.BuildControls}>
  <div className="BuildControls">
     <p style={{textAlign: 'center'}}><strong>${props.price.toFixed(2)}</strong></p>
     {controls.map((item) => {
       return (
         <BuildControl
           added={() => props.ingredientAdded(item.type)}
           removed={() => props.ingredientRemoved(item.type)}
           key={item.label}
           label={item.label}
           disabled={props.disabled[item.label]}
         />
       )
     })}
     
   </div>
 )
}

 export default buildControls;
