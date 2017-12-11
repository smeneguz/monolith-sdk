/*
*  Name :   ListCheckListNavigation.jsx
*  Location : /lib/Bubbles/ListBub/ListCheckListNavigation.jsx
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: Navigation on CheckList
*/


import React, { Component } from 'react';
import LineEdit from '../../ui/SingleComponents/LineEdit/LineEdit.jsx';
import PushButton from '../../ui/SingleComponents/PushButton/PushButton.jsx';
import VerticalLayout from '../../ui/Layouts/VerticalLayout.jsx';
import CheckBoxList from '../../ui/SingleComponents/CheckBoxList/CheckBoxList.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import {BubbleCheckList} from "./CheckListDb";
import Spinner from './Spinner.jsx';
import { Meteor } from 'meteor/meteor';

export class ListCheckListNavigation extends React.Component{
    constructor(props){
        super(props);
        if(this.props.lists) {
            let h = [];
            for (let i = 0; i < this.props.lists.length; i++) {
                h.push(true);
            }
            this.state= {hidden: h};
        }
        else{
            this.state = {hidden: []};
        }
        this.hide=this.hide.bind(this);
        //this.getCheck=this.getCheck.bind(this);
        this.addToList=this.addToList.bind(this);
    }

    hide(selection){
        let hiddenElements=this.state.hidden;
        let selectedEl = hiddenElements[selection];
        for(let i=0;i<hiddenElements.length;i++){
            hiddenElements[i]=true;
        }
        hiddenElements[selection]=!selectedEl;
        this.setState({hidden:hiddenElements});
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.lists) {
            let h = [];
            for (let i = 0; i < nextProps.lists.length; i++) {
                h.push(true);
            }
            this.setState({hidden: h});
        }
    }

    addToList(item) {
        this.props.add(item);//.splice(0)
    }

    render() {
        if(this.props.loading){
            return (<Spinner/>);
        }
        else {
            let lists = [];
            for (let i = 0; i < this.props.lists.length; i++) {
                let options = [];
                for (let j = 0; j < this.props.lists[i].ops.length; j++) {
                    options.push(
                        <div key={j} className="check-div">
                            <span className="itemInList">{this.props.lists[i].ops[j]}</span>
                            <PushButton argument={this.props.lists[i].ops[j]}
                                        buttonName="Add"
										classes="addCheck-button btn-xs"
                                        handleClick={this.addToList}/> <br/>
                        </div>
                    );
                }
                lists.push(
                    <div key={i}>
                        <PushButton argument={i} buttonName={this.props.lists[i].title} classes="btn-info btn-xs"
                                    handleClick={this.hide}/>
                        <VerticalLayout hide={this.state.hidden[i]}>
                            {options}
                        </VerticalLayout>
                    </div>
                );
            }
            if(this.props.lists.length === 0){
                lists = (<p>There are no checklists defined for this chat room.</p>);
            }
            return (
                <div className="checklist_container">
                    <VerticalLayout hide={this.props.hide}>
                        {lists}
                    </VerticalLayout>
                </div>
            );
        }
    }
}


export default ListCheckListNavigationContainer = createContainer(() => {
    let roomId = Session.get('openedRoom');
    let subHandler = Meteor.subscribe('monolith-checklists', roomId);
    const loading = !subHandler.ready();
    const lists = BubbleCheckList.find({roomId: {$eq: roomId}}).fetch();
    return {
        loading,
        lists,
        currentUser: Meteor.user()
    };
}, ListCheckListNavigation);

