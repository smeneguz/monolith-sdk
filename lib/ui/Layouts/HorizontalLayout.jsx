/*
*  Name :   HorizontalLayout.jsx
*  Location : /imports/UI/Layouts
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: {
Place all elements horizontally up to a maximum of 12}
*  ----------------------------------------------
*  History :
*  Version: 1.0.0
*  Update data: 2017-08-25
*  Description: added comments "how to use"
*  Author: Silvio Meneguzzo
*/


import style from '../CSS/styles.css';
import React, { Component } from 'react';
import { render as reactRender } from 'react-dom';
import { renderToString as reactRenderToString } from 'react-dom/server';
import ContainedElement from './ContainedElement.jsx';
//importare boostrap

class HorizontalLayout extends React.Component{
    constructor(props){
        super(props);
        this.renderChildren = this.renderChildren.bind(this);
        this.countMyChildern = this.countMyChildern.bind(this);
    }


    renderChildren() {
        let count=this.countMyChildern();
        let bootclass="col-md-1";
        if(count>12)
            console.log("Max number of element exceeded!\n Due to Bootstrap grid system max number of elements permit are 12.\nElements inserted = "+count);
        else{
            let value=Number((12/count).toFixed(0));
            bootclass="col-md-"+value;
        }
        let classes = classNames(bootclass);
        return React.Children.map(this.props.children, child => {
            return (<ContainedElement classNames={classes}>{child}</ContainedElement>);
        });
    }

    countMyChildern(){
            return React.Children.count(this.props.children);
    }


    render(){
        let classes = classNames("row",{"hidden" : this.props.hide},this.props.classNames);
        return(
            <div className={classes}>
                {this.renderChildren()}
            </div>
        );
    }
}

export default HorizontalLayout;

/*
How to use:
<HorizontalLayout hide={"visibility state(true or false)"}>
<Children/>
<Children/>
.
.
.
</HorizontalLayout>
*/
