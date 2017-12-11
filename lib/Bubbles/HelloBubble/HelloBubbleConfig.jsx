/*
*  Name :   HelloBubbleConfig.jsx
*  Location : /lib/Bubbles/HelloBubble/HelloBubbleConfig.jsx
*  Author: Emanuele Crespan
*  Creation Data: 2017-09-05
*  Description: class HelloBubbleConfig
*/

import React, { Component } from 'react';
import PushButton from '../../ui/SingleComponents/PushButton/PushButton';
import LineEdit from '../../ui/SingleComponents/LineEdit/LineEdit';
import VerticalLayout from '../../ui/Layouts/VerticalLayout';
import AbsBubbleConfig from '../../../lib/uiConstruction/AbsBubbleConfig';
import {HelloDb} from "./HelloDb";


export default class HelloBubbleConfig extends AbsBubbleConfig{
    constructor(props){
        super(props);
        this.state={
            value:""
        };
        this.getValue=this.getValue.bind(this);
        this.send=this.send.bind(this);
    }
    getValue(val){
        this.setState({value:val});
    }

    send(){
        let insProm = HelloDb.insert({value: this.state.value});
        insProm.then(
            (result) => {this.props.closeMenu();},
            (error) => {console.log(error);}
        );
    }

    render(){
        return(
            <VerticalLayout>
                <LineEdit
                    updateState={this.getValue}
                />
                <PushButton buttonName='Send' handleClick={this.send}/>
            </VerticalLayout>);
    }

}

/*
how to use:
<RandBubbleConfig send={this.'function name'}/>
*/
