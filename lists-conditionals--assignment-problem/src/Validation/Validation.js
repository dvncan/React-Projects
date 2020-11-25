import React from 'react'




const Validation = (props) =>{
    let validationMessage = 'Text long enough';

    if(props.inputLength <= 5){
        validationMessage = 'Text to short'
    }


    
    return(
        <div>
            <p>{validationMessage}</p>
        </div>
        
    );
};

export default Validation;



/* option 1
const Validation = (props) =>{
    return(
        <div>
            {
                props.inputLength > 5?
                <p>Text Long Enought</p> :
                <p>Text too short</p>


            }
        </div>
        
    );
};

export default Validation;



//dont for the the or operator */