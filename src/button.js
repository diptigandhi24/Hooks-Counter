import React from 'react'

function Button(props){
    return<button onClick={props.onClick}>{props.name}</button>
}

function IncrementButton(props){
    return <Button name={"increment"} onClick={props.onClick}/>
}

function DecrementButton(props){
    return <Button name={"Decrement"} onClick={props.onClick}/>
}

function ResetButton(props){
    return <Button name={"Reset"} onClick={props.onClick}/>
}
export {IncrementButton, DecrementButton,ResetButton} ;