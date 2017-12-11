/*
*  Name :   CurrencyBubble.jsx
*  Location : /lib/Bubbles/CurrencyBub/CurrencyBubble.jsx
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: class CurrencyBubble
*/

import React, { Component } from 'react';
import { render as reactRender } from 'react-dom';
import { renderToString as reactRenderToString } from 'react-dom/server';
import VerticalLayout from "../../ui/Layouts/VerticalLayout";
import AbsBubble from "../../uiConstruction/AbsBubble";


export default class CurrencyBubble extends AbsBubble{
    constructor(props){
        super(props);
    }


    render(){
        return(
          <VerticalLayout>
              <span className="propertyLabel">From:</span>
              <span className="text">{this.props.curr_in}: {this.props.value_in}</span><br/>
              <span className="propertyLabel">To:</span>
              <span className="text">{this.props.curr_out}: {this.props.value_out}</span>
          </VerticalLayout>
        );
    }
}

/*
How to use:
<CurrencyBubble
    curr_in
    curr_out
    value_in
    value_out
/>
*/
