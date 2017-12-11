/*
*  Name :   HelloBubble.jsx
*  Location : /lib/Bubbles/HelloBubble/HelloBubble.jsx
*  Author: Emanuele Crespan
*  Creation Data: 2017-09-05
*  Description: class HelloBubble
*/


import React, { Component } from 'react';
import VerticalLayout from '../../ui/Layouts/VerticalLayout';
import AbsBubble from '../../../lib/uiConstruction/AbsBubble';


export default class HelloBubble extends AbsBubble {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <VerticalLayout>
                <h1>{this.props.value}</h1>
            </VerticalLayout>
        );
    }
}
