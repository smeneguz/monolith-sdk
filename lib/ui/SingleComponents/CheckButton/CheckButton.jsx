/*
*  Name :   CheckButton.jsx
*  Location : /imports/UI/SingleComponents/CheckButton
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: {Single Component CheckButton}
*  ----------------------------------------------
*  History :
*  Version: 1.0.0
*  Update data: {2017-08-25}
*  Description: {added comments using code }
*  Author: {Silvio Meneguzzo}
*/


import React, { Component } from 'react'
import { render as reactRender } from 'react-dom'
import { renderToString as reactRenderToString } from 'react-dom/server'


class CheckButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            check:false,
        }
        this.changeCheck=this.changeCheck.bind(this);
    }
    changeCheck(event){
        this.setState({check:!this.state.check});
		let m={id:this.props.id, value:this.props.value, check:event.target.checked};
        this.props.getCheck(m);
    }
    render(){
			var chClass = classNames("",this.props.classes);
            return(<div className={chClass}><input id={this.props.id} type="checkbox" onChange={this.changeCheck} checked={this.state.check}/>{this.props.value}</div>);
    }

}

export default CheckButton;

/*
How to use:
<CheckButton
    id= // like HTML id
	classes= // CSS classes
    getCheck={this."function name"}
    value="checkbox value"
/>
*/
