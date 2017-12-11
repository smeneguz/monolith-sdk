/*
*  Name :  RandCreator.jsx
*  Location : /lib/Bubbles/RandBub/RandCreator.jsx
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: class RandCreator 
*/


import BubbleCreator from '../../uiConstruction/BubbleCreator';
import { BubbleDiscriminator } from '../../uiConstruction/BubbleDiscriminator';

import React from 'react';
import RandBubble from './RandBubble';
import RandBubbleConfig from './RandBubbleConfig';
import RandBubbleCreationButton from './RandBubbleCreationButton';

class RandCreator extends BubbleCreator {
	constructor(bubbleName) {
		super(bubbleName);
	}
	doMakeBubbleSender(props) {
		return React.createElement(RandBubble, props);
	}
	doMakeBubbleReceiver(props) {
		return React.createElement(RandBubble, props);
	}
	doMakeConfigurationMenu(closeMenufun) {
		return React.createElement(RandBubbleConfig, {closeMenu: closeMenufun});
	}
	doMakeButton(createConfigArea) {
		return React.createElement(RandBubbleCreationButton, { onClick: createConfigArea });
	}
}



const rc = new RandCreator('random');
BubbleDiscriminator.registerBubbleCreator(rc);
