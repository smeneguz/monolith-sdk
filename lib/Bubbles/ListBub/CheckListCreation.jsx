/*
*  Name :   ChecklistCreation.jsx
*  Location : /lib/Bubbles/ListBub/ChecklistCreation.jsx
*  Author: Emanuele Crespan
*  Creation Data: 2017-06-27
*  Description: {class ChecklistCreation}
*/


import LineEdit from '../../ui/SingleComponents/LineEdit/LineEdit.jsx';
import PushButton from '../../ui/SingleComponents/PushButton/PushButton.jsx';
import VerticalLayout from '../../ui/Layouts/VerticalLayout.jsx';
import React, { Component } from 'react';
import AbsList from './AbsList.jsx';
import {aBubbleCheckList} from "./CheckListDb";
import { Meteor } from 'meteor/meteor';

export default class CheckListCreation extends AbsList {
    constructor(props){
        super(props);
        this.saveToDb=this.saveToDb.bind(this);
        this.state = {
            ops: []
        };
    }

    saveToDb(){
        console.log(this.state);
        const insProm = aBubbleCheckList.insertAsync(
            {
                title: this.state.title,
                ops: this.state.ops,
                roomId: Session.get('openedRoom'),
                userId: Meteor.userId
            }
        );
        insProm.then(
            (s) => {this.props.closeMenu();console.log(s);},
            (e) => {console.log(e);}
        );
    }

    render() {
        let rows=[];
        for(let i=0;i<this.state.ops.length;i++){
            rows.push(
                <div key={i}>
                    Option {i+1}:<br/>
                    <LineEdit id={i} value={this.state.ops[i].value} updateState={this.optChange}/>
                    <PushButton argument={i} buttonName="&times;" handleClick={this.delOpt}/>
                </div>
            );
        }
        return (
            <div>
                <h3>Checklist Name:</h3>
                <LineEdit id="title" placeholder="Insert Checklist Name" updateState={this.titleChange}/><br/>
                {rows}<br/>
                <PushButton buttonName="Add" handleClick={this.addOpt}/><br/>
                <PushButton buttonName="Save" handleClick={this.saveToDb}/>
            </div>

        );
    }
}
