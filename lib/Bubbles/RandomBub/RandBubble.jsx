/*
*  Name :   RandBubble.jsx
*  Location : /lib/Bubbles/RandBub/RandBubble.jsx
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: class RandBubble
*/


import React, { Component } from 'react';
import VerticalLayout from '../../ui/Layouts/VerticalLayout';
import PushButton from '../../ui/SingleComponents/PushButton/PushButton';
import AbsBubble from '../../../lib/uiConstruction/AbsBubble';
import {RandomDb} from './RandDb.js';


export default class RandBubble extends AbsBubble {
    constructor(props){
        super(props);
        this.calcolate=this.calcolate.bind(this);
    }

    calcolate(){
        RandomDb.update(this.props._id, 'BubbleRandomUpdate', this.props.range);
    }

    render(){
        return(
            <VerticalLayout>
                <h1>Rolled number: {this.props.value}</h1>
                <PushButton buttonName='Re-roll' handleClick={this.calcolate}/>
            </VerticalLayout>
        );
    }
}

/*
how to use:
<RandBubble nMax={'maximum number'}/>;

*/
