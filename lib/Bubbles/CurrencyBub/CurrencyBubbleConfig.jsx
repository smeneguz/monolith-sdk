/*
*  Name :   CurrencyBubbleConfig.jsx
*  Location : /lib/Bubbles/CurrencyBub/CurrencyBubbleConfig.jsx
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: class CurrencyBubbleConfig
*/




import React, { Component } from 'react'
import VerticalLayout from "../../ui/Layouts/VerticalLayout";
import ComboBox from "../../ui/SingleComponents/ComboBox/ComboBox";
import LineEdit from "../../ui/SingleComponents/LineEdit/LineEdit";
import PushButton from "../../ui/SingleComponents/PushButton/PushButton";
import AbsBubbleConfig from "../../uiConstruction/AbsBubbleConfig";
import {CurrencyDb} from "./CurrencyDb.js";

export default class CurrencyBubbleConfig extends AbsBubbleConfig{
    constructor(props){
        super(props);
        this.getValue=this.getValue.bind(this);
        this.getCurrIn=this.getCurrIn.bind(this);
        this.getCurrOut=this.getCurrOut.bind(this);
        this.send=this.send.bind(this);
        this.curr=['AED','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD','BDT','BGN','BHD','BIF','BMD','BND','BOB','BRL','BSD','BTC','BTN','BWP','BYN','BZD','CAD','CDF','CHF','CLF','CLP','CNH','CNY','COP','CRC','CUC','CUP','CVE','CZK','DJF','DKK','DOP','DZD','EGP','ERN','ETB','EUR','FJD','FKP','GBP','GEL','GGP','GHS','GIP','GMD','GNF','GTQ','GYD','HKD','HNL','HRK','HTG','HUF','IDR','ILS','IMP','INR','IQD','IRR','ISK','JEP','JMD','JOD','JPY','KES','KGS','KHR','KMF','KPW','KRW','KWD','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LYD','MAD','MDL','MGA','MKD','MMK','MNT','MOP','MRO','MUR','MVR','MWK','MXN','MYR','MZN','NAD','NGN','NIO','NOK','NPR','NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD','SCR','SDG','SEK','SGD','SHP','SLL','SOS','SRD','SSP','STD','SVC','SYP','SZL','THB','TJS','TMT','TND','TOP','TRY','TTD','TWD','TZS','UAH','UGX','USD','UYU','UZS','VEF','VND','VUV','WST','XAF','XAG','XAU','XCD','XDR','XOF','XPD','XPF','XPT','YER','ZAR','ZMW','ZWL'];
        this.state={
            curr_in: this.curr[0],
            curr_out: this.curr[0],
            value:0,
        }
    }

    getCurrOut(text){
        this.setState({curr_out:text})
    }

    getCurrIn(text){
        this.setState({curr_in:text})
    }

    getValue(text){
        this.setState({value:text});
    }

    send(id){
        let prom = CurrencyDb.insert(
            {
                curr_in: this.state.curr_in,
                curr_out: this.state.curr_out,
                value: this.state.value
            },
            'BubbleCurrencyConvertor'
        );
        prom.then(
            (res) => {this.props.closeMenu();},
            (err) => {console.error("Something bad happened....");}
        );

    }

    render(){
      return(
            <VerticalLayout>
                <span className="propertyLabel">Scegli la valuta base</span>
                <ComboBox options={this.curr} getSelection={this.getCurrIn}/><br/>
                <span className="propertyLabel">Scegli la valuta finale</span>
                <ComboBox options={this.curr} getSelection={this.getCurrOut}/><br/>
                <span className="propertyLabel">Inserisci il valore:</span>
                <LineEdit updateState={this.getValue}/>
                <PushButton handleClick={this.send} buttonName="Send"/>
            </VerticalLayout>
        );
    }
}



