/*
*  Name :   TextAreaComboBox.jsx
*  Location : /imports/UI/SingleComponents/TextAreaComboBox
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: A React class that represent a TextArea and a ComboBox
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
import ComboBox from '../ComboBox/ComboBox.jsx'


export default class TextAreaComboBox extends React.Component {
    /*
    tolte le funzioni per la gestione degli stati e rimandato il compito alle funzioni passate dalle props
    */
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.props.textUpdate(event.target.value);
    }

    render(){
		var txClass = classNames("",this.props.classestx);
		var cbClass = classNames("",this.props.classescb);
        return(<div>
            <textarea id={this.props.idtx} className={txClass} width={this.props.width} height={this.props.height} onChange={this.handleChange}></textarea>
            <ComboBox id={this.props.idcb} className={cbClass} options={this.props.options} getSelection={this.props.comboUpdate}/>
        </div>);
    }
}

/*
How to use:
<TextAreaComboBox
	idtx= //textArea id like HTML id
	classestx= // textArea CSS classes
	idcb= //combobox id like HTML id
	classescb= // combobox CSS classes
    width="textarea width"
    height="textarea height"
    textUpdate={this."function name"}
    options={["a","b","c"]} // array of options
    comboUpdate={this."function name"}
/>
*/
