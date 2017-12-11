/*
*  Name :   PollCreator.jsx
*  Location : /lib/Bubbles/PollBub/PollCreator.jsx
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: class PollCreator
*/


import BubbleCreator from '../../uiConstruction/BubbleCreator';
import { BubbleDiscriminator } from '../../uiConstruction/BubbleDiscriminator';

import React from 'react';
import PollBubble from './PollBubble';
import PollBubbleConfig from './PollBubbleConfig';
import PollBubbleCreationButton from './PollBubbleCreationButton';

class PollCreator extends BubbleCreator {
	constructor(bubbleName) {
		super(bubbleName);
	}
	doMakeBubbleSender(props) {
		return React.createElement(PollBubble, props);
	}
	doMakeBubbleReceiver(props) {
		return React.createElement(PollBubble, props);
	}
	doMakeConfigurationMenu(closeMenufun) {
		return React.createElement(PollBubbleConfig, {closeMenu: closeMenufun});
	}
	doMakeButton(createConfigArea) {
		return React.createElement(PollBubbleCreationButton, { onClick: createConfigArea });
	}
}

const pc = new PollCreator('poll');
BubbleDiscriminator.registerBubbleCreator(pc);
