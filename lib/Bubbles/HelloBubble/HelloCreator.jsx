/*
*  Name :  HelloCreator.jsx
*  Location : /lib/Bubbles/HelloBubble/HelloCreator.jsx
*  Author: Emanuele Crespan
*  Creation Data: 2017-06-27
*  Description: class HelloCreator 
*/

import BubbleCreator from '../../uiConstruction/BubbleCreator';
import { BubbleDiscriminator } from '../../uiConstruction/BubbleDiscriminator';

import React from 'react';
import HelloBubble from './HelloBubble';
import HelloBubbleConfig from './HelloBubbleConfig';
import HelloBubbleCreationButton from './HelloBubbleCreationButton';

class HelloCreator extends BubbleCreator {
	constructor(bubbleName) {
		super(bubbleName);
	}
	doMakeBubbleSender(props) {
		return React.createElement(HelloBubble, props);
	}
	doMakeBubbleReceiver(props) {
		return React.createElement(HelloBubble, props);
	}
	doMakeConfigurationMenu(closeMenufun) {
		return React.createElement(HelloBubbleConfig, {closeMenu: closeMenufun});
	}
	doMakeButton(createConfigArea) {
		return React.createElement(HelloBubbleCreationButton, { onClick: createConfigArea });
	}
}



const rc = new HelloCreator('hello');
BubbleDiscriminator.registerBubbleCreator(rc);
