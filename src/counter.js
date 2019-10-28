import React,{useState,useEffect} from 'react'
// import {counter ,handleIncrement ,handleDecrement} from './counterLogic'

import CounterUI from './counterUI'

export default function Counter(){
    let initialState = 0
    let [counter, setCounter] = useState(initialState);
    
    useEffect(()=>{
        document.title = `you click ${counter} times`;
        })
    function handleIncrement(counter){
        setCounter(counter + 1);
    }
    function handleDecrement(counter){
    setCounter(counter - 1);
    }
    function handleReset(counter){
        setCounter(initialState);
    }
    return <CounterUI counter={counter} increment={handleIncrement} decrement={handleDecrement} reset={handleReset}/>
}