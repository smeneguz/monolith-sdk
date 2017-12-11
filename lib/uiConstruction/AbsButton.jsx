/*
*  Name :   AbsButton.jsx
*  Location : /lib/uiConstruction/AbsButton.jsx
*  Author: Nicolò Rigato
*  Creation Data: 2017-07-18
*  Description: Abstract class of generic Button
*  ----------------------------------------------
*/





import React, { Component } from 'react';
//import { render as reactRender } from 'react-dom';

export default class AbsButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		if (this.constructor === AbsButton) {
			throw new TypeError('AbsButton is abstract');
		}
	}

	handleClick() {
		this.props.onClick(this.bubbleName());
	}

	bubbleName(){
        if (this.bubbleName === AbsButton.prototype.bubbleName) {
            throw new TypeError('Please implement bubbleName method of AbsButton derivate class.');
        }
	}

    bubbleButtonName(){
        if (this.bubbleName === AbsButton.prototype.bubbleName) {
            throw new TypeError('Please implement bubbleButtonName method of AbsButton derivate class.');
        }
    }

    secondAreaName() {
        if (this.secondAreaName === AbsButton.prototype.secondAreaName) {
            throw new TypeError('Please implement secondAreaName method of AbsButton derivate class.');
        }
	}

    handleSecondButton(){
        this.props.onClick(this.secondAreaName());
    	/*
        if (this.handleSecondButton === AbsButton.prototype.handleSecondButton) {
            throw new TypeError('Please implement handleSecondButton method of AbsButton derivate class.');
        }*/
	}

	render() {
        let btnClass = classNames('btn', 'btn-primary', 'btn-lg', /*'bubble-menu-button',*/ this.props.classes);
        if(this.props.secondButtonName){
            return (
            	<div className="btn-group-vertical bubble-menu-button">
					<button
						id={this.props.id}
						className={btnClass}
						onClick={this.handleClick}>
						{this.bubbleButtonName()}
					</button>
					<button
						className={btnClass}
						onClick={this.handleSecondButton}>
                        {this.props.secondButtonName}
					</button>
				</div>
            );
		}
		else {
            return (
            	<button
					id={this.props.id}
					type="button" className={classNames(btnClass, 'bubble-menu-button')}
					onClick={this.handleClick}>
					{this.bubbleButtonName()}
				</button>
			);
        }
	}
}

