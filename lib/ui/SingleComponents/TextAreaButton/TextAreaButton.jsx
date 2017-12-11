/*
*  Name :   TextAreaButton.jsx
*  Location : /imports/UI/SingleComponents/TextAreaButton
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: A React class that represent a TextArea and a Button that return the text of the TextArea
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
import PushButton from '../PushButton/PushButton.jsx'


export default class TextAreaButton extends React.Component{// non funziona il ridimensionamento
    constructor(props){
        super(props);
        this.state={
            value:''
        }
        this.textField=this.textField.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    textField(event){
        this.setState({value:event.target.value});
    }
    handleClick(){
        this.props.getText(this.state.value);
    }
    render(){
		var pbClass = classNames("",this.props.classespb);
		var taClass = classNames("",this.props.classesta);
        return(<div>
                <textarea id={this.props.idta} className={taClass} width={this.props.width} height={this.props.height} onChange={this.textField}></textarea>
                <PushButton argument={this.props.idpb} classes={pbClass} handleClick={this.handleClick} buttonName={this.props.buttonName}/>
            </div>

        );
    }
}
/*
How to use:
<TextAreaButton
	idta= // textArea like HTML id
	classesta= // textArea CSS classes
	idpb= // like HTML id
	classespb= // CSS classes
    getText={this."function name"}
    width="textarea width"
    height="textarea height"
    buttonName="button name"
/>
*/
