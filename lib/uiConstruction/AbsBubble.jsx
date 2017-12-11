/*
*  Name :   AbsBubble.jsx
*  Location : /lib/uiConstruction/AbsBubble.jsx
*  Author: Nicolò Rigato
*  Creation Data: 2017-07-18
*  Description: Abstract class of generic Bubble
*  ----------------------------------------------
*/







import React, { Component } from 'react';
//import { render as reactRender } from 'react-dom';

export default class AbsBubble extends React.Component {
	constructor(props, bubbleId/*,bubbleName*/) {
		super(props);
		if (this.constructor === AbsBubble) {
			throw new TypeError('AbsBubble is abstract');
		}
		/* this.bubbleName = bubbleName;*/
		this.bubbleId = bubbleId;
	}
}
