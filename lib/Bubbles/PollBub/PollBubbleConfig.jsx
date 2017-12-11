/*
*  Name : PollBubbleConfig.jsx
*  Location : /lib/Bubbles/PollBub/PollBubbleConfig.jsx
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: {class PollBubbleConfig}
*/


import React, { Component } from 'react';
import PushButton from "../../ui/SingleComponents/PushButton/PushButton";
import VerticalLayout from "../../ui/Layouts/VerticalLayout";
import LineEdit from "../../ui/SingleComponents/LineEdit/LineEdit"
import AbsBubbleConfig from "../../../lib/uiConstruction/AbsBubbleConfig";
import {PollDb} from "./PollDb";

export default class PollBubbleConfig extends AbsBubbleConfig {
    constructor(props){
        super(props);
        this.state={ num: 0, op:[],title:''};
        this.addOpt=this.addOpt.bind(this);
        this.titleChange=this.titleChange.bind(this);
        this.optChange=this.optChange.bind(this);
        this.send=this.send.bind(this);
    }

    addOpt(){
        let n=this.state.num+1;
        this.setState({num:n});
    }

    titleChange(text,id){
        this.setState({title:text});
    }

    optChange(text,id) {
        let newEl={id:id, val:text, votes:0};
        let oldStateOp = this.state.op;
        oldStateOp[id] = newEl;
        this.setState({op:oldStateOp});
    }

    send(){
        console.log(this.state);
        let insProm = PollDb.insert({ title: this.state.title, options: this.state.op, voted: [] });
        insProm.then(
            (res) => {this.props.closeMenu();},
            (err) => {console.error("Something bad happened....");}
        );
    }

    render() {
        let rows = [];
        let n=this.state.num;
        for (let i=0; i <= n; i++) {
            rows.push(
                <div key={i}>
                Option {i+1}:<br/>
                <LineEdit id={i} placeholder="Insert an Option" updateState={this.optChange}/>
            </div>);
        }
        return (
            <VerticalLayout>
                <h1>Domanda:</h1><br/>
                <LineEdit id="question" placeholder="Insert a question" updateState={this.titleChange}/><br/>
                {rows}<br/>
                <PushButton buttonName="Add" handleClick={this.addOpt}/><br/>
                <PushButton buttonName="Send" handleClick={this.send} />
            </VerticalLayout>

        );
    }

}

/*
how to use:
<PollBubbleConfig send={this."function name"}/>
*/
