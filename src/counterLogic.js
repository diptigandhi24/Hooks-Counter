import {useState} from 'react'
// This code will not work because hooks can only be called inside a body of funtional component

function Test(){
let initialState = 0;
let [counter, setCounter] = useState(initialState);
//pass increment and decrement counter and state through props
function handleIncrement(counter){
    setCounter(counter + 1);
}
function handleDecrement(counter){
    setCounter(counter - 1);
}
return {counter ,handleIncrement ,handleDecrement}
}
export let  {counter ,handleIncrement ,handleDecrement} = Test();