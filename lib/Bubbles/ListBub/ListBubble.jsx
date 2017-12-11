/*
*  Name :   ListBubble.jsx
*  Location : /lib/Bubbles/ListBub/ListBubble.jsx
*  Author: Emanuele Crespan
*  Creation Data: 2017-06-27
*  Description: class ListBubble
*/



import React, { Component } from 'react'
import VerticalLayout from "../../ui/Layouts/VerticalLayout";
import CheckBoxList from "../../ui/SingleComponents/CheckBoxList/CheckBoxList";
import AbsBubble from "../../../lib/uiConstruction/AbsBubble";
import PushButton from '../../ui/SingleComponents/PushButton/PushButton.jsx';
import {ListDb} from "./ListDb.js";

export default class ListBubble extends AbsBubble{
    constructor(props){
        super(props);
        this.checkItem=this.checkItem.bind(this);
        this.buttonSymbol=this.buttonSymbol.bind(this);
    }

    checkItem(position){
        ListDb.update(this.props._id, 'updateCheckListItem', position);
    }

    buttonSymbol (position) {
        if(this.props.ops[position].check){
            return {simb: <span>&radic;</span>, active: true};
        } else {
            return {simb: <span>&times;</span>, active: false};
        }
    }

    render(){
        const listItems = [];
        for(let i=0;i<this.props.ops.length;i++){
            listItems.push(
                <div key={i}>
                    <PushButton argument={i}
                                buttonName={this.buttonSymbol(i).simb}
                                dis={this.buttonSymbol(i).active}
                                handleClick={this.checkItem}
                    />
                    <span className="itemInList">{this.props.ops[i].item}</span>
                </div>
            );
        }
        return(
            <VerticalLayout>
                <h1>{this.props.title}</h1>
                {listItems}
            </VerticalLayout>
        );
    }
}
