/*
*  Name :   BubbleDiscriminator.jsx
*  Location : /lib/uiConstruction/BubbleDiscriminator.jsx
*  Author: Nicolò Rigato
*  Creation Data: 2017-07-18
*  Description: defines what type of bubble it is
*  ----------------------------------------------
*/

import BubbleCreator from './BubbleCreator.jsx';
import { Meteor } from 'meteor/meteor';

//if(Meteor.isClient) {
export const BubbleDiscriminator = {
	BubbleCreatorMap: {},
	registerBubbleCreator(bubbleCreator) {
		if (bubbleCreator instanceof BubbleCreator) {
			//this.BubbleCreatorMap = Object.assign(this.BubbleCreatorMap, {[bubbleCreator.bubbleName]: bubbleCreator});
			this.BubbleCreatorMap[bubbleCreator.bubbleName] = bubbleCreator;
		} else {
			throw new TypeError('registerBubbleCreator needs a BubbleCreator as argument');
		}
	},
	useDoMakeBubbleSender(bubbleType, data) {
		if (this.BubbleCreatorMap && this.BubbleCreatorMap[bubbleType]) {
			return this.BubbleCreatorMap[bubbleType].doMakeBubbleSender(data);
		} else {
			throw new Error(`Bubbletype ${ bubbleType } not found. You need to register it with BubbleDiscriminator.registerBubbleCreator.`);
		}
	},
	useDoMakeBubbleReceiver(bubbleType, data) {
		if (this.BubbleCreatorMap && this.BubbleCreatorMap[bubbleType]) {
			return this.BubbleCreatorMap[bubbleType].doMakeBubbleReceiver(data);
		} else {
			throw new Error(`Bubbletype ${ bubbleType } not found. You need to register it with BubbleDiscriminator.registerBubbleCreator.`);
		}
	},
	useDoMakeBubbleConfigurationMenu(bubbleType, closeMenu) {
		if (this.BubbleCreatorMap && this.BubbleCreatorMap[bubbleType]) {
			return this.BubbleCreatorMap[bubbleType].doMakeConfigurationMenu(closeMenu);
		} else {
			throw new Error(`Bubbletype ${ bubbleType } not found. You need to register it with BubbleDiscriminator.registerBubbleCreator.`);
		}
	},
	useDoMakeButton(bubbleType, createConfigArea) {
		if (this.BubbleCreatorMap && this.BubbleCreatorMap[bubbleType]) {
			return this.BubbleCreatorMap[bubbleType].doMakeButton(createConfigArea);
		} else {
			throw new Error(`Bubbletype ${ bubbleType } not found. You need to register it with BubbleDiscriminator.registerBubbleCreator.`);
		}
	}
};
//}
