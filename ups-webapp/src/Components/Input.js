import React from 'react';


const Input = (props) =>{
    console.log('Index.js | Rendering...');
    console.log({props})
    
    return(
        <div>
          <p>{props.value}
            <input 
            id={props.id} 
            type='text'
            lable={props.values}
            onChange={(event) => this.changed(event)}/>
          </p>
        </div>
    )


}

export default Input;