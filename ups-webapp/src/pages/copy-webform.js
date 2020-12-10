import React, { Component } from 'react';
import Form from '../Components/Form'

import classes from './webform.module.css';

import axios from 'axios';

class Webform extends Component {  
   
    constructor(props) {    
        super(props);
        console.log('|App.js| constructor');
    }
    
    state = {
        url: 'https://cors-anywhere.herokuapp.com/https://upscapi.ams1907.com/apis/list-extstg/quote/v2',
        url2: 'https://upscapi.ams1907.com/apis/list-extstg/coverage/v2',
        success: false,
        response: {
            "quoteId": "",
            "premiumAmount": "",
            "quoteDateTime": "",
            "quoteValidTo": "",
            "quoteInfo": {
                "partnerId": "API7983",
                "status": "",
                "shipmentInfo": {
                    "carrier": "",
                    "shipDate": "",
                    "bol": "",
                    "insuredValue": "",
                    "shipmentType": ""
                },
                "originAddress": {
                    "address1": "",
                    "city": "",
                    "state": "",
                    "countryCode": ""
                },
                "destinationAddress": {
                    "address1": "",
                    "city": "",
                    "state": "",
                    "postalCode": "",
                    "countryCode": ""
                }
            }
        },
        quote:{
            "partnerId" : "API7983",
            "shipDate" : "2020-12-17",
            "bol" : "xxx",
            "insuredValue" : 1000,
            "carrier" : "UPS",
            "shipmentType" : "2",
            "originAddress1" : "595 Huron St",
            "originCity" : "Toronto",
            "originState" : "ON",
            "originPostalCoe" : "M5R2R8",
            "originCountry" : "CA",
            "destinationAddress1" : "1450 Burnaby St",
            "destinationCity" : "Vancouver",
            "destinationState" : "BC",
            "destinationPostalCode" : "V6G1W7",
            "destinationCountry" : "CA"
        }
        
        
        
        
        
        /*quote:  {
                partnerId: 'API7983', 
                shipDate: new Date('2020-12-12'), 
                billoflading:'xxx',
                insuredValue:100, 
                carrier:'UPS',
                shipmentType:'2', 
                commodity:'',
                originAddress:'',             
                originAddress2:'', 
                originCity:'',
                originState:'',
                originPostalZip:'',
                originCountryCode:'',
                consignee:'',
                destinationAddress:'',
                destinationAddress2:'',
                destinationCity:'',
                destinationState:'',
                destinationPostalZip:'',
                destinationCountryCode:'',
                serviceLevel:'',
                packageQuantity:'',
                referenceFields:''}*/
    }

/*    setQuoteId = (qId) => {
        const tempQuote = {...this.state.quote};
        tempQuote.id = qId;
        this.setState({quote: tempQuote});
    }*/


    onClickHandler = (event) => {
        alert('Quote request has been submitted');
        console.log('Quote request has been submitted');
        console.log('quote: ', this.state.quote);
        axios.post(this.state.url,this.state.quote,{
            headers:{
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json',
                'Bearer': 'eyJhbGciOiJIUzM4NCJ9.eyJwYXJ0bmVySWQiOiJBUEk3OTgzIn0.qWLRUDqZm_s_O7Ob8ihVfIcDzxTIffkcJnSOYDospQIivs80EMMna6JNH1UPliK7',
                'X-IBM-Client-Id': '1e326652-7627-41be-b8bc-159581331946',
                'X-IBM-Client-Secret': 'Q2qG0tQ8aM6dP5eD7lM0uR5fP8nK3iX6oQ2kC4bI2yO0jT6qE4'
                
            }
        }).then(res=>{
            this.setState({response:res.data});
            console.log(res.data);
            this.setState({success:true});
            this.render(){
                return(
                <>
                    {response}
                </>
            )};
        })
    }

    onPartnerChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.partnerId = event.target.value;
        this.setState({quote: tempQuote});
    }
    
    onShipChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.shipDate = event.target.value;
        this.setState({quote: tempQuote});
    }

    onBolChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.billoflading = event.target.value;
        this.setState({quote: tempQuote});
    }

    onValChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.insuredValue = event.target.value;
        this.setState({quote: tempQuote});
    }

    onCarrierChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.carrier = event.target.value;
        this.setState({quote: tempQuote});
    }
    onShipTypeChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.shipmentType = event.target.value;
        this.setState({quote: tempQuote});
    }

    onCommodityChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.commodity = event.target.value;
        this.setState({quote: tempQuote});
    }

    onOaddChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.originAddress = event.target.value;
        this.setState({quote: tempQuote});
    }

    onOadd2ChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.originAddress2 = event.target.value;
        this.setState({quote: tempQuote});
    }

    onOcityChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.originCity = event.target.value;
        this.setState({quote: tempQuote});
    }

    onOstateChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.originState = event.target.value;
        this.setState({quote: tempQuote});
    }

    onOpostChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.originPostalZip = event.target.value;
        this.setState({quote: tempQuote});
    }

    onOcountryChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.originCountryCode = event.target.value;
        this.setState({quote: tempQuote});
    }

    onConsigneeChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.consignee = event.target.value;
        this.setState({quote: tempQuote});   
    }
    
    onDestAddChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.destinationAddress = event.target.value;
        this.setState({quote: tempQuote});
    }

    onDestAdd2ChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.destinationAddress2 = event.target.value;
        this.setState({quote: tempQuote});
    }
    
    onDestCityChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.destinationCity = event.target.value;
        this.setState({quote: tempQuote});
    }

    onDestStateChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.destinationState = event.target.value;
        this.setState({quote: tempQuote});
    }

    onDestPChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.destinationPostalZip = event.target.value;
        this.setState({quote: tempQuote});
    }

    onDestCounChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.destinationCountryCode = event.target.value;
        this.setState({quote: tempQuote});
    }

    onServLChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.serviceLevel = event.target.value;
        this.setState({quote: tempQuote});
    }

    onPkgQChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.packageQuantity = event.target.value;
        this.setState({quote: tempQuote});
    }
    

    onRefFieldChangeHandler = (event) => {
        console.log(event.target.value)
        const tempQuote = {...this.state.quote};
        tempQuote.referenceFields = event.target.value;
        this.setState({quote: tempQuote});
    }

  /*  onConfirmationHandler = (event) => {
        axios.post(this.state.url2,{
            "quoteId": {this.state.response.quoteId},
            "partnerId" : "API7983",
            "bol":{}

        },{
            headers:{
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json',
                'Bearer': 'eyJhbGciOiJIUzM4NCJ9.eyJwYXJ0bmVySWQiOiJBUEk3OTgzIn0.qWLRUDqZm_s_O7Ob8ihVfIcDzxTIffkcJnSOYDospQIivs80EMMna6JNH1UPliK7',
                'X-IBM-Client-Id': '1e326652-7627-41be-b8bc-159581331946',
                'X-IBM-Client-Secret': 'Q2qG0tQ8aM6dP5eD7lM0uR5fP8nK3iX6oQ2kC4bI2yO0jT6qE4'
                
            }
        }).then(res=>{
            this.setState({response:res.data});
            console.log(res.data);
            this.setState({success:true})
        })

        this will need to be a success component that i pass properties through by defining inside success block

    }*/

    render()  {    
    let status = 'UNCONFIRMED';
    if(this.state.success){
        return(
            <div>
                <p>Quote ID: {this.state.response.quoteId}</p>
                <p>Premium Amount: {this.state.response.premiumAmount}</p>
                <p>Status: {this.state.response.quoteInfo.status} </p>
                <Form/>
            </div>
        )
    };

        return(
            <div className='Webform'>
                <h1>Webform</h1>
                <p> Quote Submission Form:</p>
                <h5>{status}</h5>


            </div>
        );}

}



export default Webform;