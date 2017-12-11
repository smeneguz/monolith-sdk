/*
*  Name :   ImageButton.jsx
*  Location : /imports/UI/SingleComponents/ImageButton
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: {A React class that represent a ImageButton}
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


export default class ImageButton extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.handleClick(this.props.id);
    }
    render(){
		var imgClass = classNames("",this.props.classes);
        return(<input id={this.props.id} type="image" className={imgClass} src={this.props.src} alt={this.props.alt} width={this.props.width} height={this.props.height} onClick={this.handleClick}/>);
    }
}

/*
<ImageButton
    id= // like HTML "id" attribute
    src= // like HTML "src" attribute
    alt=  // like HTML "alt" attribute
    width=  // like HTML "width" attribute
    height=  // like HTML "height" attribute
    handleClick={this."function name"}
/>
 */
