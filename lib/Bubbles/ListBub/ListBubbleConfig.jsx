/*
*  Name :   ListBubbleConfig.js
*  Location : /lib/Bubbles/ListBub/ListBubbleConfig.jsx
*  Author: Emanuele Crespan
*  Creation Data: 2017-06-27
*  Description: class ListBubbleConfig
*/

import React, { Component } from 'react';
import AbsList from './AbsList.jsx';
import LineEdit from '../../ui/SingleComponents/LineEdit/LineEdit.jsx';
import PushButton from '../../ui/SingleComponents/PushButton/PushButton.jsx';
import VerticalLayout from '../../ui/Layouts/VerticalLayout.jsx';
import CheckBoxList from '../../ui/SingleComponents/CheckBoxList/CheckBoxList.jsx';
import ListCheckListNavigationContainer from './ListCheckListNavigation.jsx';
//import {aBubbleCheckList} from './CheckListDb.js';
import {ListDb} from "./ListDb.js";

export default class ListBubbleConfig extends AbsList {
    constructor(props){
        super(props);
        this.state={ ops:[],title:'', hide:true	};
		this.display_checklist=this.display_checklist.bind(this);
		//this.add_checklist=this.add_checklist.bind(this);
		this.send=this.send.bind(this);
    }

	display_checklist(){
		this.setState({hide:!this.state.hide});
	}


	send(){//mettere apposto questo metodo
        let insProm = ListDb.insert(
            {
                title: this.state.title,
                ops: this.state.ops
            },
            'listInsertion'
        );
        insProm.then(
            (s) => {console.log(s); this.props.closeMenu();},
            (e) => {console.log(e);}
        );
	}

    render() {
        let rows=[];

        for(let i=0;i<this.state.ops.length;i++){
            rows.push(
                <div key={i}>
		    		Option {i+1}:<br/>
		            <LineEdit id={i} value={this.state.ops[i]} updateState={this.optChange}/>
                    <PushButton argument={i} buttonName="&times;" handleClick={this.delOpt}/>
                </div>
            );
        }
        return (
            <div>
                <h3>List Name:</h3>
                <LineEdit id="title" placeholder="Insert List Name" updateState={this.titleChange}/><br/>
                <PushButton buttonName="CheckLists" classes="checklist-button btn-sm" handleClick={this.display_checklist}/><br/>
				<ListCheckListNavigationContainer hide={this.state.hide} add={this.addOpt}/>
                {rows}<br/>
                <PushButton buttonName="Add" classes="btn-sm add-option-button" handleClick={this.addOpt}/><br/>
                <PushButton buttonName="Send" classes="" handleClick={this.send}/>
            </div>

        );
    }
}


/*
how to use:
<ListBubbleConfig send={this."function name"}/>
*/
