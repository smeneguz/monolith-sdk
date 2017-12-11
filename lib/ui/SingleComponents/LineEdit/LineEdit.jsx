/*
*  Name :   LineEdit.jsx
*  Location : /imports/UI/SingleComponents/LineEdit
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: A React class that represent a LineEdit html element
*  ----------------------------------------------
*  History :
*  Version: 1.0.0
*  Update data: 2017-08-25
*  Description: added comments "how to use"
*  Author: Silvio Meneguzzo
*/



import React, { Component } from 'react'
import { render as reactRender } from 'react-dom'
import { renderToString as reactRenderToString } from 'react-dom/server'

export default class LineEdit extends React.Component {
    constructor(props) {
        super(props);
		this.state={
			text: this.props.value ? this.props.value : ''
		};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
		this.setState({text: event.target.value});
        this.props.updateState(event.target.value,this.props.id);
    }
    render(){
		let leClass = classNames("",this.props.classes);
        return <input id={this.props.id} type="text" className={leClass} placeholder={this.props.placeholder} onChange={this.handleChange} value={this.state.text}/>;
    }
}

/*
How to use:
 <LineEdit
	id= // like HTML id
	classes= // CSS classes
	updateState={this."function name"}
	value="default value"
 />
*/
