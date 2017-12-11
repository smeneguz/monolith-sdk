/*
*  Name :   RadioButtonGroup.jsx
*  Location : /imports/UI/SingleComponents/RadioButtonGroup
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description:  A React class that represent a RadioButtonGroup
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


export default class RadioButtonGroup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            options:this.props.options,
            value:''
        }
    }

    handleClick(event){
        this.state.value=event.target.value;
        this.props.getValue(this.state.value)
    }
    render(){
        let el=[];
        for (var i=0;i<this.state.options.length;i++)
            el.push(<div><input id={i} key={i} type="radio" value={this.state.options[i]} onClick={this.handleClick.bind(this)}/>{this.state.options[i]}</div>)
        return(<div>
            {el}
        </div>);
    }

}

/*
<RadioButtonGroup
	classes= // CSS classes
    options={["a","b","c"]} //array of options
    getValue={this."function name"}
/>
 */
