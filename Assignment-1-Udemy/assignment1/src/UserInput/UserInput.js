//use a function as often as possible so that it responds w JSX 
import React from 'react'


const userInput = (props) => {
    const style = {
        border: '2px solid red'
    };
    return <input type='text' 
    style={style}
    onChange={props.changed} 
    value={props.currentName} /> //adding () executes on run not on change
}


export default userInput