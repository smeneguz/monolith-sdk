/*
*  Name :   LineEditComboBox.jsx
*  Location : /imports/UI/SingleComponents/LineEditComboBox
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: A React class that represent a LineEdit and a ComboBox
*  ----------------------------------------------
*  History :
*  Version: 1.0.0
*  Update data: 2017-08-25
*  Description: added comments "how to use"
*  Author: Silvio Meneguzzo
*/



import React, { Component } from 'react';
import { render as reactRender } from 'react-dom';
import { renderToString as reactRenderToString } from 'react-dom/server';
import LineEdit from '../LineEdit/LineEdit.jsx';
import ComboBox from '../ComboBox/ComboBox.jsx'


export default class LineEditComboBox extends React.Component{
    /*
    tolte le funzioni per la gestione degli stati e rimandato il compito alle funzioni passate dalle props
    */
    constructor(props){
        super(props);
    }

    render(){
		var leClass = classNames("",this.props.classesle);
		var cbClass = classNames("",this.props.classescb);
        return(<div>
            <LineEdit id={this.props.idle} classes={leClass} updateState={this.props.textUpdate}/>
			<ComboBox id={this.props.idcb} classes={cbClass} options={this.props.options} getSelection={this.props.comboUpdate}/>
        </div>);
    }
}

/*
How to use:
<LineEditComboBox
	idle= // lineEdit HTML id
	idcb= // comboBox  HTML id
	classesle= // lineEdit CSS classes
	classescb= // comboBox CSS classes
    textUpdate={this."function name"}
    options={["a","b","c"]} //array of option
    comboUpdate={this."function name"}
/>
*/
