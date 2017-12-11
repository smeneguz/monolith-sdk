/*
*  Name :   LineEditPushButton.jsx
*  Location : /imports/UI/SingleComponents/LineEditPushButton
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: A React class that represent a LineEdit with a Button that return the LineEdit content when clicked
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
import LineEdit from '../LineEdit/LineEdit.jsx';
import PushButton from '../PushButton/PushButton.jsx'

export default class LineEditPushButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
        this.handleClick=this.handleClick.bind(this);
        this.textField=this.textField.bind(this);
    }
    textField(text){
        this.setState({value:text});
    }
    handleClick(){
        this.props.getText(this.state.value);
    }

    render(){
		var leClass = classNames("",this.props.classesle);
		var pbClass = classNames("",this.props.classespb);
        return(<div>
            <LineEdit id={this.props.idle} classes={leClass} updateState={this.textField}/>
			<PushButton argument={this.props.idpb} classes={pbClass} handleClick={this.handleClick} buttonName={this.props.buttonName}/>
        </div>);
    }
}
/*
<LineEditPushButton
	idle= // lineEdit HTML id
	idpb= // pushButton HTML id
	classesle= // lineEdit CSS classes
	classespb= // pushButton CSS classes
    getText={this."function name"}
    buttonName="button name"
/>
*/
