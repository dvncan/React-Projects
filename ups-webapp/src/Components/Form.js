import React from 'react';
   
import classes from '../pages/webform.module.css';

const Form = (props) =>{    
    return(
        <div className='Webform'>
            <form id='quote'>
            <h3>*Partner ID:
                <input 
                        type='text' 
                        id='partnerId' 
                        className={classes.input}       
                        onChange={props.partnerChanged}
                        />
                </h3>
                <h3>*Shipping Date:
                    <input 
                        type='date' 
                        id='shipDate' 
                        className={classes.input}
                        onChange={props.shipDateChanged}
                        /> 
                </h3>
                <h3>*Bill of Lading:
                    <input 
                        type='text'
                        id='bol' 
                        className={classes.input} 
                        onChange={props.bolChanged}
                        /> 
                </h3>
                <h3>*Insured Value:
                    <input 
                        type='number' 
                        id='insuredValue' 
                        className={classes.input} 
                        onChange={props.valChanged}
                        />        
                </h3>
                <h3>*Carrier:
                    <input 
                        type='text' 
                        id='carrier' 
                        className={classes.input} 
                        onChange={props.carrierChanged}
                        /> 
                </h3>
                <h3>*Shipment Type:
                    <input 
                        type='text' id='shipmentType' 
                        className={classes.input} 
                        onChange={props.shipDateChanged}
                        /> 
                </h3>
                <h3>Commodity:
                    <input 
                        type='text' 
                        id='commodity' 
                        className={classes.input} 
                        onChange={props.commodityChanged}
                        /> 
                </h3>
                <h3>*Origin Address:
                    <input 
                        type='text' 
                        id='originAddress' 
                        className={classes.input} 
                        onChange={props.oAddChanged}
                        /> 
                </h3>
                <h3>*Origin Address 2:
                    <input 
                        type='text' 
                        id='originAddress2' 
                        className={classes.input} 
                        onChange={props.oAdd2Changed}
                        /> 
                </h3>
                <h3>*Origin City:
                    <input 
                        type='text' 
                        id='originCity' 
                        className={classes.input} 
                        onChange={props.oCityChanged}
                        /> 
                </h3>
                <h3>*Origin State:
                    <input 
                        type='text' 
                        id='originState' 
                        className={classes.input} 
                        onChange={props.oStateChanged}
                        /> 
                </h3>
                <h3>*Origin Postal/Zip: 
                    <input 
                        type='text' 
                        id='origin-postal-zip'
                        className={classes.input}
                        onChange={props.oPostChanged} 
                        /> 
                </h3>
                <h3>*Origin Country:
                    <input 
                        type='text' 
                        id='originCountryCode' 
                        className={classes.input} 
                        onChange={props.oCountryChanged}
                        /> 
                </h3>
                <h3>Consignee 
                    <input 
                        type='text' 
                        id='consignee'  
                        className={classes.input} 
                        onChange={props.conChanged}
                        />
                </h3>
                <h3>*Destination Address:
                    <input 
                        type='text' 
                        id='destinationAddress' 
                        className={classes.input}
                        onChange={props.desAddChanged} 
                        /> 
                </h3>
                <h3>*Destination Address 2:
                    <input 
                        type='text' 
                        id='destinationAddress2' 
                        className={classes.input} 
                        onChange={props.dAdd2Changed}
                        /> 
                </h3>
                <h3>*Destination City:
                    <input 
                        type='text' 
                        id='destinationCity' 
                        className={classes.input}
                        onChange={props.dCityChanged}
                         /> 
                </h3>
                <h3>*Destination State:
                    <input 
                        className='input'
                        type='text' 
                        id='destinationState' 
                        className={classes.input} 
                        onChange={props.dStateChanged}
                        /> 
                </h3>
                <h3>*Destination Postal/Zip:
                    <input 
                        className='input'
                        type='text' 
                        id='destination-postal-zip' 
                        className={classes.input} 
                        onChange={props.dPostChanged}
                        /> 
                </h3>
                <h3>*Destination Country:
                    <input 
                        className='input'
                        type='text' 
                        id='destinationCountryCode' 
                        className={classes.input} 
                        onChange={props.dCountryChanged}
                        /> 
                </h3>
                <h3>Service Level:
                    <input 
                        className='input'
                        type='text' 
                        id='serviceLevel' 
                        className={classes.input} 
                        onChange={props.serChanged}
                        /> 
                </h3>
                <h3>Package Quantity: 
                    <input 
                        className='input'                         
                        type='number' 
                        id='packageQuantity' 
                        className={classes.input}
                        onChange={props.pQChanged}
                        /> 
                </h3>
                <h3>Reference Fields:
                    <input
                        className='input' 
                        type='text' 
                        id='referenceFields' 
                        className={classes.input}
                        onChange={props.refChanged}
                        /> 
                </h3>

                <button className='button'
                    className={classes.btn}
                    onClick={props.clicked}> Submit
                </button>
            
            </form>
        </div>
        )
}


export default Form;