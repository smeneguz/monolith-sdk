/*
*  Name :   Image.jsx
*  Location : /imports/UI/SingleComponents/Image
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: A React class that represent a Image
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


export default class Image extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
		var imgClass = classNames("",this.props.classes);
        return(<img id={this.props.id} className={imgClass} src={this.props.src} alt={this.props.alt} width={this.props.width} height={this.props.height}/>);
    }
}

/*
<Image
	id= // like HTML "id" attribute
	classes= // CSS classes
    src= // like HTML "src" attribute
    alt=  // like HTML "alt" attribute
    width=  // like HTML "width" attribute
    height=  // like HTML "height" attribute
/>
 */
