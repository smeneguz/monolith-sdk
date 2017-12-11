/*
*  Name :   AbsBubbleConfig.jsx
*  Location : /lib/uiConstruction/AbsBubbleConfig.jsx
*  Author: Nicolò Rigato
*  Creation Data: 2017-07-18
*  Description: Abstract class of generic Configuration Bubble 
*  ----------------------------------------------
*/



import React, { Component } from 'react';
//import { render as reactRender } from 'react-dom';

export default class AbsBubbleConfig extends React.Component {
	constructor(props) {
		super(props);
		if (this.constructor === AbsBubbleConfig) {
			throw new TypeError('AbsBubbleConfig is abstract');
		}
	}

}
