import React, {Component} from 'react';

import classes from './webform.module.css'

class Webform extends Component {

    constructor(props){
        super(props);
        console.log('|App.js| constructor');
    }
    
    state = {
        quote: [
            {id:'partnerId', name: 'partnerId', value:''},
            {id:'shipDate', name: 'shipDate', value:''},
            {id:'bol', name:'billoflading', value:''},
            {id:'insuredValue', name:'insuredValue', value:''},
            {id:'carrier', name:'carrier', value:''},
            {id:'shipmentType', name:'shipmentType', value:''},
            {id:'commodity', name:'commodity', value:''},
            {id:'originAddress', name:'originAddress', value:''},
            {id:'originAddress2', name:'originAddress2', value:''},
            {id:'originCity', name:'originCity', value:''},
            {id:'originState', name:'originState', value:''},
            {id:'origin-postal-zip', name:'originPostalCode', value:''},
            {id:'originCountryCode', name:'originCountryCode', value:'' },
            {id:'consigneeName', name:'consigneeName', value:''},
            {id:'destinationAddress', name:'destinationAddress', value:''},
            {id:'destinationAddress2', name:'destinationAddress2', value:''},
            {id:'destinationCity', name:'destinationCity', value:''},
            {id:'destinationState', name:'destinationState', value:''},
            {id:'destination-postal-zip', name:'destinationPostalCode', value:''},
            {id:'destinationCountryCode', name:'destinationCountryCode', value:''},
            {id:'serviceLevel', name:'serviceLevel', value:''},
            {id:'packageQuantity', name:'packageQuantity', value:''},
            {id:'referenceFields', name:'referenceFields', value:''}
        ]
    }

    onClickHandler = (event, props) => {
        alert('Quote request has been submitted');
        console.log('Quote request has been submitted');
        console.log(this.state.quote);
    }

    onChangeHandler = (event) =>{
        this.setState({quote: event.target.value});
    }
    
    render(){

        let status = 'UNCONFIRMED';

        return(
            <div className={classes.Webform}>
                <h1>Webform</h1>
                <p className={classes.red} >*Required Information</p>
                <h3>{status}</h3>
                <h3>*Partner ID:
                    <input 
                        type='text' 
                        id='partnerId' 
                        className={classes.input}
                        onChange={this.onChangeHandler}></input>
                </h3>
                <h3>*Shipping Date:
                    <input type='date' id='shipDate' className={classes.input}></input>
                </h3>
                <h3>*Bill of Lading:
                    <input type='text' id='bol' className={classes.input}></input>
                </h3>
                <h3>*Insured Value:
                    <input type='number' id='insuredValue' className={classes.input}></input>
                </h3>
                <h3>*Carrier:
                    <input type='text' id='carrier' className={classes.input}></input>
                </h3>
                <h3>*Shipment Type:
                    <input type='text' id='shipmentType' className={classes.input}></input>
                </h3>
                <h3>Commodity:
                    <input type='text' id='commodity' className={classes.input}></input>
                </h3>
                <h3>*Origin Address:
                    <input type='text' id='originAddress' className={classes.input}></input>
                </h3>
                <h3>*Origin Address 2:
                    <input type='text' id='originAddress2' className={classes.input}></input>
                </h3>
                <h3>*Origin City:
                    <input type='text' id='originCity' className={classes.input}></input>
                </h3>
                <h3>*Origin State:
                    <input type='text' id='originState' className={classes.input}></input>
                </h3>
                <h3>*Origin Postal/Zip: 
                    <input type='text' id='origin-postal-zip' className={classes.input}></input>
                </h3>
                <h3>*Origin Country:
                    <input type='text' id='originCountryCode' className={classes.input}></input>
                </h3>
                <h3>Consignee Name:
                    <input type='text' id='consigneeName' className={classes.input}></input>
                </h3>
                <h3>*Destination Address:
                    <input type='text' id='destinationAddress' className={classes.input}></input>
                </h3>
                <h3>*Destination Address 2:
                    <input type='text' id='destinationAddress2' className={classes.input}></input>
                </h3>
                <h3>*Destination City:
                    <input type='text' id='destinationCity' className={classes.input}></input>
                </h3>
                <h3>*Destination State:
                    <input type='text' id='destinationState' className={classes.input}></input>
                </h3>
                <h3>*Destination Postal/Zip:
                    <input type='text' id='destination-postal-zip' className={classes.input}></input>
                </h3>
                <h3>*Destination Country:
                    <input type='text' id='destinationCountryCode' className={classes.input}></input>
                </h3>
                <h3>Service Level:
                    <input type='text' id='serviceLevel' className={classes.input}></input>
                </h3>
                <h3>Package Quantity: 
                    <input type='number' id='packageQuantity' className={classes.input}></input>
                </h3>
                <h3>Reference Fields:
                    <input type='text' id='referenceFields' className={classes.input}></input>
                </h3>

                <button 
                    className={classes.btn}
                    onClick={this.onClickHandler}> Submit
                </button>

            </div>
        )
    }
}



export default Webform;