//Create counter UI thats it
// so you will just create UI component using html and css no state and props 
import React from 'react';
import "./counterUI.css"
import {IncrementButton, DecrementButton, ResetButton} from './button'

function CounterUI(props){
    let {counter, increment, decrement,reset}= props
    
    return<div className={"counterBg"}>
        <h4 className={"counterbox"}>{counter}</h4>
        <IncrementButton name={"Increment"} onClick ={()=>increment(counter)}/>
        <DecrementButton name={"Decrement"} onClick ={()=>decrement(counter)}/>
        <ResetButton name={"Decrement"} onClick ={()=>reset(counter)}/>
        
    </div>
}

export default CounterUI;