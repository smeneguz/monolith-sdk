/*
*  Name :   ContainedElement.jsx
*  Location : /imports/UI/Layouts
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: {associate classnames to props}
*  ----------------------------------------------
*/




import React, { Component } from 'react'
import { render as reactRender } from 'react-dom'
import { renderToString as reactRenderToString } from 'react-dom/server'

class ContainedElement extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let classes = classNames(this.props.classNames);
        return <div className={classes}>{React.cloneElement(this.props.children)}</div>;
    }
}

export default ContainedElement;
