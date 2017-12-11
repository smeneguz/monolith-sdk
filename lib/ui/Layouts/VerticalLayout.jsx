/*
*  Name :   VerticalLayout.jsx
*  Location : /imports/UI/Layouts
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: position all the elements vertically
*  ----------------------------------------------
*  History :
*  Version: 1.0.0
*  Update data: 2017-08-25
*  Description: added comments "how to use"
*  Author: Silvio Meneguzzo
*/



import style from '../CSS/styles.css';

//importare boostrap

import React, { Component } from 'react';
import { render as reactRender } from 'react-dom';
import { renderToString as reactRenderToString } from 'react-dom/server';
import ContainedElement from './ContainedElement.jsx';

class VerticalLayout extends React.Component{
    constructor(props){
        super(props);
        this.renderChildren = this.renderChildren.bind(this);
    }


    renderChildren() {
        let i = 0;
        return React.Children.map(
            this.props.children,
                child => {
                i++;
                return (<ContainedElement key={i} classNames="col-md-12">{child}</ContainedElement>);
            }
        );
    }


    render(){
        var classes = classNames("row",{"hidden" : this.props.hide},this.props.classNames);
        return(
            <div className={classes}>
                {this.renderChildren()}
            </div>
        );
    }
}

export default VerticalLayout;


/*
How to use:
<VerticalLayout hide={"visibility state(true or false)"}>
<Children/>
<Children/>
.
.
.
</VerticalLayout>
*/
